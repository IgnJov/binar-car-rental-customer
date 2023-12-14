import React from "react";
import "./OurServices.css";

function OurServices() {
    return (
        <div className="our-services-section">
            <div className="container">
                <div className="row justify-content-between m-0 p-0">
                    <div className="image-container text-center col-12 col-md-6 m-0 p-0">
                        <img src="./images/our-services-image.png" alt="" />
                    </div>
                    <div className="text-container col-12 col-md-5 m-0 p-0">
                        <h2 className="fw-bold">
                            Best Car Rental for any kind of trip in (Lokasimu)!
                        </h2>
                        <p>
                            Sewa mobil di (Lokasimu) bersama Binar Car Rental
                            jaminan harga lebih murah dibandingkan yang lain,
                            kondisi mobil baru, serta kualitas pelayanan terbaik
                            untuk perjalanan wisata, bisnis, wedding, meeting,
                            dll.
                        </p>
                        <ul className="benefit-list">
                            <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                            <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                            <li>Sewa Mobil Jangka Panjang Bulanan</li>
                            <li>Gratis Antar - Jemput Mobil di Bandara</li>
                            <li>Layanan Airport Transfer / Drop In Out</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurServices;
