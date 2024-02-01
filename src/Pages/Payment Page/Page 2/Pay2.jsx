import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Updated import
import Topnavbar2 from "../../../assets/Components/Navbar/Top Navbar/Page 2/topnavbar";
import Botnavbar from "../../../assets/Components/Navbar/Bottom Navbar/botnavbar";
import copy from "../../../../../Platinum Challenge/src/assets/Image/fi_copy.png";
import "./style.css";

const Payment2 = () => {
  const { mobilName, kategori, totalPrice, selectedBank } = useParams();
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());
  const [isConfirmationBoxExpanded, setIsConfirmationBoxExpanded] = useState(false);
  const [isPhotoUploaded, setIsPhotoUploaded] = useState(false);
  const [confirmationText, setConfirmationText] = useState("Klik konfirmasi pembayaran untuk mempercepat proses pengecekan");
  const [buttonText, setButtonText] = useState("Konfirmasi Pembayaran");
  const navigate = useNavigate(); // Updated hook

  const timeRemainingRef = useRef(timeRemaining);

  useEffect(() => {
    timeRemainingRef.current = timeRemaining;
  }, [timeRemaining]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining(timeRemainingRef.current));
    }, 1000);

    setTimeRemaining(getTimeRemaining(timeRemainingRef.current));

    return () => clearInterval(timer);
  }, []);

  function getTimeRemaining(prevState) {
    const now = new Date();
    const deadline = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    const timeRemainingInSeconds = Math.floor((deadline - now) / 1000);

    const hours = String(Math.floor(timeRemainingInSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((timeRemainingInSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(timeRemainingInSeconds % 60).padStart(2, "0");

    return {
      hours,
      minutes,
      seconds,
      deadline: deadline.toLocaleDateString("id-ID"),
    };
  }

  const handleConfirmationButtonClick = () => {
    setIsConfirmationBoxExpanded(!isConfirmationBoxExpanded);

    setConfirmationText(
      isConfirmationBoxExpanded
        ? "Klik konfirmasi pembayaran untuk mempercepat proses pengecekan"
        : "Konfirmasi Pembayaran"
    );

    setButtonText(isConfirmationBoxExpanded ? "Konfirmasi Pembayaran" : "Upload");
  };

  const handlePhotoUpload = () => {
    console.log("Uploaded");
    setIsPhotoUploaded(true);
    navigate("/Ticket"); // Updated navigation
  };

  return (
    <div>
      <Topnavbar2 />
      <div className="primal-box">
        <div className="horizontal-box">
          <div className="vertical-box">
            <div className="payment-deadline-box">
              <h4>Selesaikan pembayaran sebelum</h4>
              <p>{timeRemaining.deadline}</p>
            </div>
            <div className="timer-box">
              <p>
                <span>{timeRemaining.hours}</span>:
                <span>{timeRemaining.minutes}</span>:
                <span>{timeRemaining.seconds}</span>
              </p>
            </div>
          </div>

          <div className="vertical-box">
            <div>
              <h4>Lakukan Transfer Ke</h4>
            </div>
            <div className="box-container">
              <div className="box">
                <h4>{selectedBank}</h4>
              </div>
              <div className="box-text">
                <p>{selectedBank} Transfer </p>
                <p>a.n Binar Car Rental</p>
              </div>
            </div>
            <div>
              <p>Nomor Rekening</p>
              <div className="placeholder-box">
                <span>5410 4257 8777 </span>
                <img className="copy" src={copy} alt="copy" />
              </div>
            </div>
            <div>
              <p>Total Bayar</p>
              <div className="total-box">
                <span>Rp.{totalPrice},00</span>
                <img className="copy" src={copy} alt="copy-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className={`confirm ${isConfirmationBoxExpanded ? "box-expanded" : ""}`}>
          <p>{confirmationText}</p>
          {isConfirmationBoxExpanded && !isPhotoUploaded && (
            <div>
              <p>Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.</p>
              <p>Upload Bukti Pembayaran</p>
              <p>Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu</p>
              <input type="file" onChange={handlePhotoUpload} />
            </div>
          )}
          {isConfirmationBoxExpanded ? (
            <button className="upload-button" onClick={handlePhotoUpload}>Upload</button>
          ) : (
            <button className="confirm-button" onClick={handleConfirmationButtonClick}>{buttonText}</button>
          )}
        </div>
      </div>

      <div className="container">
        <div>
          <h4>Instruksi Pembayaran</h4>
        </div>
        <div>
          <p>ATM {selectedBank}</p>
          <p>{selectedBank} Virtual</p>
          <p>{selectedBank} Klik</p>
          <p>Internet Banking</p>
        </div>
        <div>
          <p>&#8226; Masukkan kartu ATM, lalu PIN</p>
          <p>&#8226; Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek {selectedBank} Virtual Account”</p>
          <p>&#8226; Masukkan nomor {selectedBank} Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678</p>
          <p>&#8226; Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi</p>
          <p>&#8226; Ambil dan simpanlah bukti transaksi tersebut</p>
        </div>
      </div>
      <Botnavbar />
    </div>
  );
};

export default Payment2;
