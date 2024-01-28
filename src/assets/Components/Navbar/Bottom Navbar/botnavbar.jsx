import React from "react";
import { Link } from "react-router-dom";
import ig from "../../../../../../Platinum Challenge/src/assets/Image/fi_instagram.png"
import fb from "../../../../../../Platinum Challenge/src/assets/Image/fi_facebook.png"
import twt from "../../../../../../Platinum Challenge/src/assets/Image/fi_twitter.png"
import twc from "../../../../../../Platinum Challenge/src/assets/Image/fi_twitch.png"
import mail from "../../../../../../Platinum Challenge/src/assets/Image/fi_mail.png"


import "./style.css";
const Botnavbar = () => {
    return (
        <div className="footer-body">
            <div className="primary">
                <div className="b1">
                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                    <p>binarcarrental@gmail.com</p>
                    <p>081-233-334-808</p>
                </div>
                <div className="b2">
                    <p>Our services</p>
                    <p>Why Us</p>
                    <p>Testimonial</p>
                    <p>FAQ</p>
                </div>
                <div className="b3">
                    <div>
                        <div>
                            <h1 className="b3p">Connect with us</h1>
                        </div>
                        <div className="icons">
                            <div className="fb">
                            <Link to="/Ticket">
                            <img src={fb}/>
                            </Link>
                            </div><div className="ig">
                            <Link to="/Payment/:mobilName/:kategori/:totalPrice/:selectedBank">
                            <img src={ig} />
                            </Link>
                            </div><div className="twt">
                            <Link to="/Payment/3">
                            <img src={twt}/>
                            </Link>
                            </div><div className="mail">
                            <Link to="/Payment/4">
                            <img src={mail}/>
                            </Link>
                            </div><div className="twc">
                            <Link to="/Payment/5">
                            <img src={twc}/>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="b4">
                    <div>
                        <h1 className="b4p">Copyright Binar 2022</h1>
                    </div>
                    <Link to="/Payment">
                    <div className="top-logo"> </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Botnavbar