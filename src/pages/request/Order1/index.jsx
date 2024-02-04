import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import Footer from "../../../components/footer/Footer";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import moment from "moment";

const Order1 = () => {
    const [selectedBank, setSelectedBank] = useState(null);
    const [mobilName, setMobilName] = useState("");
    const [kategori, setKategori] = useState("");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [totalDays, setTotalDays] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [price, setPrice] = useState(0);

    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        setMobilName(searchParams.get("carName") || "");
        setKategori(searchParams.get("category") || "");
        setPrice(parseFloat(searchParams.get("price")) || 0);
        setStartDate(new Date(searchParams.get("startDate")) || null);
        setEndDate(new Date(searchParams.get("endDate")) || null);

        const calculateTotalDays = () => {
            if (startDate && endDate) {
                const startTime = startDate.getTime();
                const endTime = endDate.getTime();
                const timeDifference = endTime - startTime;
                const daysDifference = Math.ceil(
                    timeDifference / (1000 * 3600 * 24)
                );
                return daysDifference;
            }
            return 0;
        };

        const calculateTotal = () => {
            if (startDate && endDate) {
                const days = calculateTotalDays();
                setTotalDays(days);
                const dailyRate = price;
                const totalPrice = days * dailyRate;
                setTotalPrice(totalPrice);
            }
        };

        calculateTotal();
    }, []);

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

    const isBankSelected = selectedBank !== null;
    const navigate = useNavigate();

    const handleBankClick = (bank) => {
        setSelectedBank((prevBank) => (prevBank === bank ? null : bank));
    };

    const handleInputChange = (inputType, value) => {
        switch (inputType) {
            case "mobilName":
                setMobilName(value);
                break;
            case "kategori":
                setKategori(value);
                break;
            default:
                break;
        }
    };

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    const handlePaymentClick = () => {
        if (isBankSelected) {
            navigate(
                `/payment/${mobilName}/${kategori}/${totalPrice}/${totalPrice}/${selectedBank}`
            );
        } else {
            alert("Pilih bank terlebih dahulu untuk melanjutkan pembayaran.");
        }
    };

    return (
        <div>
            <div>
                <div className="Payment">
                    <div>
                        <h5 className="fw-bold fs-6">Detail Pesananmu</h5>
                    </div>
                    <div className="Payment-1">
                        <div>
                            <p>Nama/Tipe Mobil</p>
                            <div>{mobilName}</div>
                            <label htmlFor="Jenis Mobil"></label>
                        </div>
                        <div>
                            <p>Kategori</p>
                            <div>{kategori}</div>
                            <label htmlFor="Jenis Mobil"></label>
                        </div>
                        <div>
                            <p>Tanggal Mulai Sewa</p>
                            <div className="">
                                {moment(startDate)
                                    .format("D MMM YYYY")
                                    .toString()}
                            </div>
                        </div>
                        <div>
                            <p>Tanggal Akhir Sewa</p>
                            <div className="">
                                {moment(endDate)
                                    .format("D MMM YYYY")
                                    .toString()}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Payment-2">
                    <div className="box-1">
                        <h5 className="fw-bold fs-6">Pilih Bank Transfer</h5>
                        <p>
                            Kamu bisa membayar dengan transfer melalui ATM,
                            Internet Banking atau Mobile Banking
                        </p>
                        <div>
                            {["BCA", "BNI", "Mandiri"].map((bank) => (
                                <div
                                    key={bank}
                                    className={`rectangle${
                                        selectedBank === bank ? " selected" : ""
                                    }`}
                                    onClick={() => handleBankClick(bank)}
                                >
                                    <div className="checkmark-container">
                                        <p className="rectangle-1">{bank}</p>
                                        <p>{`${bank} Transfer`}</p>
                                        {selectedBank === bank && (
                                            <span className="checkmark float-right">
                                                ✔
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="box-2">
                        <div>
                            <p className="box-2-1 fw-bold fs-6">{mobilName}</p>
                            <div className="box-2-2">
                                <p>
                                    {
                                        LOOKUPS.find(
                                            (lookup) =>
                                                lookup.value === kategori
                                        )?.description
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="box-2-3">
                            <p>Total</p>

                            <p>Rp.{totalPrice.toLocaleString()}</p>
                        </div>
                        <div className="box-2-4">
                            <div className="title">
                                <h4>Harga</h4>
                            </div>
                            <div className="price-details">
                                <div className="details mb-3">
                                    <li>{`Sewa Mobil Rp. ${price} per hari x ${totalDays} hari`}</li>
                                </div>
                                <div className="total-price">
                                    <p>Rp.{totalPrice.toLocaleString()}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="box-2-5">
                                <h4>Biaya Lainnya</h4>
                                {["Pajak", "Biaya makan sopir"].map((item) => (
                                    <div key={item} className="included-cost">
                                        <div>
                                            <p>{item}</p>
                                        </div>
                                        <div>
                                            <p className="itemin">Termasuk</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="not-included-cost">
                                <h4>Belum Termasuk</h4>
                                <p>Bensin</p>
                                <p>Tol dan parkir</p>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="box-2-3">
                                <p>Total</p>
                                <p>Rp.{totalPrice.toLocaleString()}</p>
                            </div>
                        </div>
                        <div className="bayar-btn-container">
                            <Link to="/Payment">
                                <button
                                    className="bayar-btn"
                                    onClick={handlePaymentClick}
                                    disabled={!isBankSelected}
                                >
                                    Bayar
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Order1;
