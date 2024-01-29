import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <div className="hero-section">
            <div className="container hero-text-container">
                <div className="row m-0 p-0">
                    <div className="col-12 col-md-6 m-0 p-0">
                        <h1 className="fw-bold">
                            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                        </h1>
                        <p className="fw-bold">
                            Selamat datang di Binar Car Rental. Kami menyediakan
                            mobil kualitas terbaik dengan harga terjangkau.
                            Selalu siap melayani kebutuhanmu untuk sewa mobil
                            selama 24 jam.
                        </p>
                        <Link to={"/search"}>
                            <button className="fw-bold">
                                Mulai Sewa Mobil
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hero-image-container">
                <img className="image" src="./images/car-image.png" alt="" />
            </div>
        </div>
    );
}

export default Hero;
