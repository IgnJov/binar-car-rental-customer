import React from "react";
import "./FAQ.css";

function FAQ() {
    const FAQ_DATA = [
        {
            question: "Apa saja syarat yang dibutuhkan?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            question: "Berapa hari minimal sewa mobil lepas kunci?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            question: "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            question: "Apakah Ada biaya antar-jemput?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            question: "Bagaimana jika terjadi kecelakaan",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ];

    function handleToggleFAQ(e) {
        let toggleBody = e.currentTarget.parentNode.nextSibling;
        toggleBody.classList.toggle("d-none");
    }

    return (
        <div className="faq-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <h2>Frequently Asked Question</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                        </p>
                    </div>
                    <div className="toggle-list-container col-12 col-md-7">
                        {FAQ_DATA.map((data, index) => (
                            <div key={index} className="toggle-container">
                                <div className="toggle-head d-flex justify-content-between align-items-center">
                                    <span className="head-content">
                                        {data.question}
                                    </span>
                                    <button
                                        onClick={handleToggleFAQ}
                                        className="toggle-button"
                                    >
                                        <img
                                            src="./icons/arrow-down.svg"
                                            alt=""
                                        />
                                    </button>
                                </div>
                                <div className="toggle-body mt-4 d-none">
                                    {data.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;
