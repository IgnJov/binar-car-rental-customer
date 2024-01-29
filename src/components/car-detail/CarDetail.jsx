import React, { useEffect, useState } from "react";
import "./CarDetail.css";
import Axios from "axios";

function CarDetail({ carId }) {
    const [carData, setCarData] = useState({});

    useEffect(handleSearchCar, []);

    const LOOKUPS = [
        { code: "CAR_CATEGORY", description: "2 - 4 orang", value: "small" },
        { code: "CAR_CATEGORY", description: "4 - 6 orang", value: "medium" },
        { code: "CAR_CATEGORY", description: "6 - 8 orang", value: "large" },
        {
            code: "CAR_PRICE_RANGE",
            description: "< Rp. 400.000",
            value: "0-400000",
        },
        {
            code: "CAR_PRICE_RANGE",
            description: "Rp. 400.000 - Rp. 600.000",
            value: "400000-600000",
        },
        {
            code: "CAR_PRICE_RANGE",
            description: "> Rp. 600.000",
            value: "600000-MAX",
        },
        {
            code: "CAR_STATUS",
            description: "Disewa",
            value: "true",
        },
        {
            code: "CAR_STATUS",
            description: "Tidak disewa",
            value: "false",
        },
    ];

    function handleSearchCar() {
        const GET_CUSTOMER_CAR_BY_ID_URL = `https://api-car-rental.binaracademy.org/customer/car/${carId}`;
        Axios.get(GET_CUSTOMER_CAR_BY_ID_URL)
            .then((data) => {
                if (data.name !== "Not Found") {
                    setCarData(data.data);
                }
            })
            .catch((error) => console.log(error));
    }

    return (
        <div className="car-detail-component">
            <div className="container">
                <div className="row justify-content-between align-items-start">
                    <div className="car-detail-component__detail-container col-12 col-md-auto order-2 order-md-1 p-4">
                        <h4>Tentang Paket</h4>
                        <div className="car-detail-component__include-container">
                            <h4>Include</h4>
                            <ul className="car-detail-component__include-list">
                                <li>
                                    Apa saja yang termasuk dalam paket misal
                                    durasi max 12 jam
                                </li>
                                <li>Sudah termasuk bensin selama 12 jam</li>
                                <li>Sudah termasuk Tiket Wisata</li>
                                <li>Sudah termasuk pajak</li>
                            </ul>
                        </div>
                        <div className="car-detail-component__exclude-container">
                            <h4>Exclude</h4>
                            <ul className="car-detail-component__exclude-list">
                                <li>
                                    Tidak termasuk biaya makan sopir Rp
                                    75.000/hari
                                </li>
                                <li>
                                    Jika overtime lebih dari 12 jam akan ada
                                    tambahan biaya Rp 20.000/jam
                                </li>
                                <li>Tidak termasuk akomodasi penginapan</li>
                            </ul>
                        </div>
                        <div className="car-detail-component__term-container">
                            <h4>Refund, Reschedule, Overtime</h4>
                            <ul className="car-detail-component__term-list">
                                <li>
                                    Tidak termasuk biaya makan sopir Rp
                                    75.000/hari
                                </li>
                                <li>
                                    Jika overtime lebih dari 12 jam akan ada
                                    tambahan biaya Rp 20.000/jam
                                </li>
                                <li>Tidak termasuk akomodasi penginapan</li>
                                <li>
                                    Tidak termasuk biaya makan sopir Rp
                                    75.000/hari
                                </li>
                                <li>
                                    Jika overtime lebih dari 12 jam akan ada
                                    tambahan biaya Rp 20.000/jam
                                </li>
                                <li>Tidak termasuk akomodasi penginapan</li>
                                <li>
                                    Tidak termasuk biaya makan sopir Rp
                                    75.000/hari
                                </li>
                                <li>
                                    Jika overtime lebih dari 12 jam akan ada
                                    tambahan biaya Rp 20.000/jam
                                </li>
                                <li> Tidak termasuk akomodasi penginapan</li>
                            </ul>
                        </div>
                    </div>
                    <div className="car-detail-component__car-container col-12 col-md order-1 order-md-2 p-4">
                        <div className="car-detail-component__car-image-container">
                            <img
                                className="car-detail-component__car-image"
                                src={carData.image}
                                alt="Car Image"
                            />
                        </div>
                        <div>
                            <h4 className="car-detail-component__car-name">
                                {carData.name}
                            </h4>
                            <span className="car-detail-component__car-category">
                                {
                                    LOOKUPS.find(
                                        (lookup) =>
                                            lookup.value === carData.category
                                    )?.description
                                }
                            </span>
                        </div>
                        <div className="car-detail-component__car-price">
                            <span>Total</span>
                            <span>
                                {`Rp. ${Intl.NumberFormat("es-ED").format(
                                    carData.price
                                )}`}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarDetail;
