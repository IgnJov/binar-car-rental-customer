import React from "react";
import Topnavbar3 from "../../assets/Components/Navbar/Top Navbar/Ticket/topnavbar";
import Botnavbar from "../../assets/Components/Navbar/Bottom Navbar/botnavbar";
import check from "../../../../Platinum Challenge/src/assets/Image/fi_check.png";
import download from "../../../../Platinum Challenge/src/assets/Image/fi_download.png";
import image from "../../../../Platinum Challenge/src/assets/Image/fi_image.png";
import "./style.css";

const Ticket = () => {
  return (
    <div className="main-container">
      <Topnavbar3 />
      <div className="check-container">
        <div className="check">
          <img src={check} alt="Check Icon" />
        </div>
        <div className="payment-success">Pembayaran Berhasil!</div>
        <div className="payment-success-1">
          Tunjukkan invoice ini ke petugas BCR di titik temu.
        </div>
      </div>
      <div className="invoice-box">
        <div>
          <div className="invoice-box-text">
            <h4>Invoice</h4>
            <p>*no Invoice</p>
          </div>
          <div className="invoice-box-icon">
            <img src={download} alt="Download Icon" /> 
            <h4>Unduh</h4>
          </div>
        </div>
        <div className="pdf-viewer-box">
          <img src={image} alt="Image Icon" />
          <div className="pdf-viewer-text">
            <p>PDF Viewer</p>
          </div>
        </div>
      </div>
      <Botnavbar />
    </div>
  );
};

export default Ticket;
