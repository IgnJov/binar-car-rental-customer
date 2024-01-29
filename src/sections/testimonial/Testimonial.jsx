import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import Carousel from "react-bootstrap/Carousel";

function Testimonial() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const IMAGE_PATH = "./images/";
    const TESTIMONIAL_DATA = [
        {
            id: 1,
            rating: "⭐⭐⭐⭐⭐",
            avatarPath: IMAGE_PATH + "img_photo_1.png",
            testimony:
                "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
            fullName: "John Dee",
            age: 32,
            location: "Bromo",
        },
        {
            id: 2,
            rating: "⭐⭐⭐⭐⭐",
            avatarPath: IMAGE_PATH + "img_photo_2.png",
            testimony:
                "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
            fullName: "John Dee",
            age: 32,
            location: "Bromo",
        },
        {
            id: 3,
            rating: "⭐⭐⭐⭐⭐",
            avatarPath: IMAGE_PATH + "img_photo_1.png",
            testimony:
                "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
            fullName: "John Dee",
            age: 32,
            location: "Bromo",
        },
    ];

    function handleNextSlide() {
        if (currentSlide < TESTIMONIAL_DATA.length - 1) {
            setCurrentSlide(currentSlide + 1);
        } else {
            setCurrentSlide(0);
        }
    }

    function handlePrevSlide() {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        } else {
            setCurrentSlide(TESTIMONIAL_DATA.length - 1);
        }
    }

    function renderCard(slide) {
        return (
            <div key={TESTIMONIAL_DATA[slide].id} className="card">
                <div className="row">
                    <div className="col-12 col-md-auto text-center">
                        <img src={TESTIMONIAL_DATA[slide].avatarPath} alt="" />
                    </div>
                    <div className="col-12">
                        <div className="rating text-center">
                            {TESTIMONIAL_DATA[slide].rating}
                        </div>
                        <div className="testimony">
                            {TESTIMONIAL_DATA[slide].testimony}
                        </div>
                        <div className="user">
                            {TESTIMONIAL_DATA[slide].fullName}{" "}
                            {TESTIMONIAL_DATA[slide].age},{" "}
                            {TESTIMONIAL_DATA[slide].location}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="testimonial-section container">
            <div className="title-container">
                <h2>Testimonial</h2>
                <p>Berbagai review positif dari para pelanggan kami</p>
            </div>
            <div className="card-container d-flex justify-content-center">
                {renderCard(currentSlide)}
            </div>
            <div className="row mt-3 justify-content-center">
                <div className="col-auto">
                    <button onClick={handlePrevSlide} className="prev-button">
                        <img src="./icons/left-button.svg" alt="" />
                    </button>
                </div>
                <div className="col-auto">
                    <button onClick={handleNextSlide} className="prev-button">
                        <img src="./icons/right-button.svg" alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
