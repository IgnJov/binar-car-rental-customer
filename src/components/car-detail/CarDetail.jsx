import React, { useEffect, useState } from "react";
import "./CarDetail.css";
import Axios from "axios";
import { useNavigate } from "react-router";
import DatePicker from "react-datepicker";
import { Button } from "react-bootstrap";
import { render } from "react-dom";
import { end } from "@popperjs/core";
import moment from "moment";

function CarDetail({ carId }) {
    const [carData, setCarData] = useState({});
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const token = localStorage.getItem("token");
    const navigate = useNavigate();

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

    const validateForm = () => {
        if (!startDate || !endDate) {
            alert("Tanggal tidak boleh kosong");
            return false;
        }
        return true;
    };

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
    function handleClick() {
        if (token) {
            if (!validateForm()) {
                return;
            }

            const stringStartDate = moment(startDate).format("D MMM YYYY");
            const stringEndDate = moment(endDate).format("D MMM YYYY");

            navigate(
                `/order?carName=${carData.name}&category=${carData.category}&price=${carData.price}&startDate=${stringStartDate}&endDate=${stringEndDate}`
            );
        } else {
            navigate("/login");
        }
    }

    function renderDatepicker() {
        const onChange = (dates) => {
            const [start, end] = dates;

            if (start < new Date()) {
                alert("Tanggal tidak boleh kurang dari hari ini");
                return;
            } else if (end - start > 7 * 24 * 60 * 60 * 1000) {
                alert("Maksimal peminjaman 7 hari");
                return;
            }

            setStartDate(start);
            setEndDate(end);
        };

        return (
            <div>
                <label className="d-block">
                    Tentukan lama sewa mobil (max. 7 hari)
                </label>
                <DatePicker
                    className="p-2"
                    placeholderText="Pilih tanggal mulai dan tanggal akhir sewa"
                    selected={startDate}
                    selectsRange
                    startDate={startDate}
                    endDate={endDate}
                    onChange={onChange}
                    dateFormat="dd/MM/yyyy"
                />
            </div>
        );
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
                        {renderDatepicker()}

                        <div className="car-detail-component__car-price">
                            <span>Total</span>
                            <span>{`Rp. ${Intl.NumberFormat("es-ED").format(
                                carData.price
                            )}`}</span>
                        </div>
                        <Button variant="success" onClick={handleClick}>
                            Lanjutkan Pembayaran
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarDetail;
