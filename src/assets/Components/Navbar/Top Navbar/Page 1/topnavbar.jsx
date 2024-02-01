import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Topnavbar = () => {
  return (
    <div className="navbar">
      <div className="secondary-navbar">
        <Link to="/Payment">
          <div className="top-logo"></div>
        </Link>
        <div className="top-navbar">
          <p>Our Services</p>
          <p>Why Us</p>
          <p>Testimonial</p>
          <p>FAQ</p>
          <button className="register-btn">Register</button>
        </div>
      </div>
      <div className="left-arrow-container">
          <p className="left-arrow">&#8592;</p>
          <p className="left-arrow-text">Pembayaran</p>
      </div>
      <div className="metode" style={{whiteSpace: "nowrap"}}>
        <p className="circle-1-1" style={{ marginTop: "50px"}}>1</p>
        <p className="circle-1-text">Pilih Metode</p>
        <hr></hr>
        <p className="circle-1" style={{ marginTop: "50px" }}>2</p>
        <p className="circle-1-text">Bayar</p>
        <hr></hr>
        <p className="circle-1" style={{ marginTop: "50px" }}>3</p>
        <p className="circle-1-text">Tiket</p>
      </div>
    </div>
  );
};

export default Topnavbar;
