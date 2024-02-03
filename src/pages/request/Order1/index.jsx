import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";

const Order1 = () => {
  const [selectedBank, setSelectedBank] = useState(null);
  const [mobilName, setMobilName] = useState("");
  const [kategori, setKategori] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [totalDays, setTotalDays] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setMobilName(searchParams.get("carName") || "");
    setKategori(searchParams.get("category") || "");
    setTotalPrice(parseFloat(searchParams.get("price")) || 0);

    const calculateTotalDays = () => {
      if (startDate && endDate) {
        const startTime = startDate.getTime();
        const endTime = endDate.getTime();
        const timeDifference = endTime - startTime;
        const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
        return daysDifference;
      }
      return 0;
    };

    const calculateTotal = () => {
      if (startDate && endDate) {
        const days = calculateTotalDays();
        setTotalDays(days);
        const dailyRate = 500000;
        const totalPrice = days * dailyRate;
        setTotalPrice(totalPrice);
      }
    };

    calculateTotal();
  }, [startDate, endDate]);

  const isBankSelected = selectedBank !== null;
  const navigate = useNavigate();

  const handleBankClick = (bank) => {
    setSelectedBank((prevBank) => (prevBank === bank ? null : bank));
  };

  const handleInputChange = (inputType, value) => {
    switch (inputType) {
      case "mobilName":
        setMobilName(value);
        break;
      case "kategori":
        setKategori(value);
        break;
      default:
        break;
    }
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handlePaymentClick = () => {
    if (isBankSelected) {
      navigate(`/Payment/${mobilName}/${kategori}/${totalPrice}/${selectedBank}`);
    } else {
      alert("Pilih bank terlebih dahulu untuk melanjutkan pembayaran.");
    }
  };

  return (
    <div>
    
    <div>
      <div className="Payment">
        <div>
          <h4>Detail Pesananmu</h4>
        </div>
        <div className="Payment-1">
          <div>
            <p>Nama/Tipe Mobil</p>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Innova"
              onChange={(e) => handleInputChange("mobilName", e.target.value)}
            />
            <label htmlFor="Jenis Mobil"></label>
          </div>
          <div>
            <p>Kategori</p>
            <select
              id="kategori"
              name="kategori"
              onChange={(e) => handleInputChange("kategori", e.target.value)}
            >
              <option value="">Pilih Kategori</option>
              <option value="1-2">1 - 2 Orang</option>
              <option value="4-6">4 - 6 Orang</option>
              <option value="6-8">8 - 10 Orang</option>
              <option value="10+">Lebih dari 10 Orang</option>
            </select>
            <label htmlFor="Jenis Mobil"></label>
          </div>
          <div>
            <p>Tanggal Mulai Sewa</p>
            <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              placeholderText="Pilih tanggal"
              dateFormat="dd MMM yyyy"
            />
          </div>
          <div>
            <p>Tanggal Akhir Sewa</p>
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              placeholderText="Pilih tanggal"
              dateFormat="dd MMM yyyy"
            />
          </div>
        </div>
      </div>
      <div className="Payment-2">
        <div className="box-1">
          <h4>Pilih Bank Transfer</h4>
          <p>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</p>
          <div>
            {["BCA", "BNI", "Mandiri"].map((bank) => (
              <div
                key={bank}
                className={`rectangle${selectedBank === bank ? " selected" : ""}`}
                onClick={() => handleBankClick(bank)}
              >
                <div className="checkmark-container">
                  <p className="rectangle-1">{bank}</p>
                  <p>{`${bank} Transfer`}</p>
                  {selectedBank === bank && <span className="checkmark">✔</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="box-2">
          <div>
            <p className="box-2-1">{mobilName}</p>
            <div className="box-2-2">
      
              <p>{kategori} <span>Orang</span></p>
            </div>
          </div>
          <div className="box-2-3">
            <p>Total</p>
            
            <p>Rp.{totalPrice.toLocaleString()}</p>
          </div>
          <div className="box-2-4">
            <div className="title">
              <h4>Harga</h4>
            </div>
            <div className="price-details">
              <div className="details">
                <p>&#8226; Sewa Mobil Rp.500.000 per hari</p>
                <p>X {totalDays} hari</p>
              </div>
              <div className="total-price">
                <p>Rp.{totalPrice.toLocaleString()}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="box-2-5">
              <h4>Biaya Lainnya</h4>
              {["Pajak", "Biaya makan sopir"].map((item) => (
                <div key={item} className="included-cost">
                  <div>
                    <p>{item}</p>
                  </div>
                  <div>
                    <p className="itemin">Termasuk</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="not-included-cost">
              <h4>Belum Termasuk</h4>
              <p>Bensin</p>
              <p>Tol dan parkir</p>
            </div>
          </div>
          <div>
            <div className="box-2-3">
              <p>Total</p>
              <p>Rp.{totalPrice.toLocaleString()}</p>
            </div>
          </div>
          <div className="bayar-btn-container">
            <Link to="/Payment">
            <button
              className="bayar-btn"
              onClick={handlePaymentClick}
              disabled={!isBankSelected}
            >
              Bayar
            </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
  );
};

export default Order1;
