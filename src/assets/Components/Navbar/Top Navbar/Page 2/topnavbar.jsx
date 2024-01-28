import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import "./style.css";

const Topnavbar2 = () => {
  const { selectedBank } = useParams();

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
        <div className="left-arrow-text-container">
          <p className="left-arrow-text">{selectedBank} Transfer</p>
          <p className="left-arrow-second-text">Order ID: 86754321</p>
        </div>
      </div>
      <div className="metode" style={{ whiteSpace: "nowrap", marginLeft: "600px" }}>
        <p className="circle-1-1" style={{ marginTop: "50px" }}>1</p>
        <p className="circle-1-text">Pilih Metode</p>
        <hr></hr>
        <p className="circle-1-1" style={{ marginTop: "50px" }}>2</p>
        <p className="circle-1-text">Bayar</p>
        <hr></hr>
        <p className="circle-1" style={{ marginTop: "50px" }}>3</p>
        <p className="circle-1-text">Tiket</p>
      </div>
    </div>
  );
};

export default Topnavbar2;
