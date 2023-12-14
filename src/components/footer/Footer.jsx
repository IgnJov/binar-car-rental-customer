import React from "react";
import "./Footer.css";

function Footer() {
    const ICON_DIRECTORY = "./icons/";
    const SOCIAL_MEDIA_DATA = [
        {
            order: 1,
            iconPath: ICON_DIRECTORY + "facebook.svg",
            url: "https://www.facebook.com/",
        },
        {
            order: 2,
            iconPath: ICON_DIRECTORY + "instagram.svg",
            url: "https://www.instagram.com/",
        },
        {
            order: 3,
            iconPath: ICON_DIRECTORY + "twitter.svg",
            url: "https://twitter.com/",
        },
        {
            order: 4,
            iconPath: ICON_DIRECTORY + "email.svg",
            url: "https://mail.google.com/",
        },
        {
            order: 5,
            iconPath: ICON_DIRECTORY + "twitch.svg",
            url: "https://www.twitch.tv/",
        },
    ];

    return (
        <footer className="container">
            <div className="row">
                <div className="col-12 col-lg-3">
                    <p className="fw-bold">
                        Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
                    </p>
                    <p className="fw-bold">binarcarrental@gmail.com</p>
                    <p className="fw-bold">081-233-334-808</p>
                </div>
                <div className="col-12 col-md-3 col-lg-2 sub-menu-container">
                    <a
                        className="d-block text-decoration-none text-reset"
                        href=""
                    >
                        Our services
                    </a>
                    <a
                        className="d-block text-decoration-none text-reset"
                        href=""
                    >
                        Why Us
                    </a>
                    <a
                        className="d-block text-decoration-none text-reset"
                        href=""
                    >
                        Testimonial
                    </a>
                    <a
                        className="d-block text-decoration-none text-reset"
                        href=""
                    >
                        FAQ
                    </a>
                </div>
                <div className="col-12 col-md-5 col-lg-4 social-media-container">
                    <p className="fw-bold">Connect with us</p>
                    <div className="social-media-icon-container row gx-3">
                        {SOCIAL_MEDIA_DATA.map((data) => (
                            <div key={data.order} className="col-auto">
                                <img
                                    className="social-media-icon"
                                    src={data.iconPath}
                                    alt="Social Media Icon"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3 copyright-container">
                    <p className="fw-bold">Copyright Binar 2022</p>
                    <img src="" alt="Logo" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
