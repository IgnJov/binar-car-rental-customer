import React from "react";
import Topnavbar from "../Navbar/Top Navbar/Page 1/topnavbar";
import { Link } from "react-router-dom";

import "./style.css"
const Header = () => {
    return (
        <div className="primary-navbar">
            <div className="z">
            <Topnavbar />
            </div>
            <div className="mid-navbar">
            <h1 className="p1">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p className="p2">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            <Link to="/search">
            <button className="btn">Mulai Sewa Mobil</button>
            </Link>
            </div>
            <div className="container">
                <div className="carcontain">
                    
                </div>
            </div>
        </div>
    )
}

export default Header