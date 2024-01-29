import React from "react";
import "./CarCatalog.css";
import { Link } from "react-router-dom";

function CarCatalog({ carsData, setCarsData }) {
    return (
        <div className="catalog catalog-container">
            {carsData.map((car) => (
                <div
                    key={car.id}
                    className="car-card p-4 d-flex flex-column justify-content-between"
                >
                    <div className="image-container mb-3">
                        <img className="" src={car.image} alt="" />
                    </div>
                    <div className="text-container">
                        <p className="car-name mb-1">{car.name}</p>
                        <p className="car-price mb-1">
                            Rp. {Intl.NumberFormat("es-ED").format(car.price)} /
                            hari
                        </p>
                        <p className="car-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>
                    <Link to={`/detail/${car.id}`}>
                        <button className="select-car-button">
                            Pilih Mobil
                        </button>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default CarCatalog;
