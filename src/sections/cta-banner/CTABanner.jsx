import React from "react";
import "./CTABanner.css";

import { Link } from "react-router-dom";

function CTABanner() {
    return (
        <div className="cta-banner-section">
            <div className="container">
                <div className="text-container d-flex flex-column align-items-center justify-content-center">
                    <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <Link to={"/search"}>
                        <button className="fw-bold">Mulai Sewa Mobil</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CTABanner;
