import React from "react";
import "./WhyUs.css";
import Card from "react-bootstrap/Card";

function WhyUs() {
    const ICON_DIRECTORY = "./icons/";
    const WHY_US_CARD_DATA = [
        {
            order: 1,
            iconPath: ICON_DIRECTORY + "thumbs-up-icon.svg",
            title: "Mobil Lengkap",
            text: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
        },
        {
            order: 2,
            iconPath: ICON_DIRECTORY + "icon_price.svg",
            title: "Harga Murah",
            text: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
        },
        {
            order: 3,
            iconPath: ICON_DIRECTORY + "icon_24hrs.svg",
            title: "Layanan 24 Jam",
            text: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
        },
        {
            order: 4,
            iconPath: ICON_DIRECTORY + "icon_professional.svg",
            title: "Sopir Profesional",
            text: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
        },
    ];

    return (
        <div className="why-us-section">
            <div className="container">
                <h2>Why Us?</h2>
                <p className="why-us-description">
                    Mengapa harus pilih Binar Car Rental?
                </p>
                <div className="row gx-3">
                    {WHY_US_CARD_DATA.map((data) => (
                        <div key={data.order} className="col-12 col-md-3">
                            <Card>
                                <Card.Body className="p-4">
                                    <Card.Title>
                                        <img
                                            className="mb-3"
                                            src={data.iconPath}
                                            alt=""
                                        />
                                        <span className="d-block mb-3">
                                            {data.title}
                                        </span>
                                    </Card.Title>
                                    <Card.Text>{data.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WhyUs;
