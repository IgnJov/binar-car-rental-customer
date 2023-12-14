import { React, useState, useEffect } from "react";
import "./Search.css";
import Axios from "axios";

import Header from "../../components/header/Header";
import Hero from "../../sections/hero/Hero";
import Filter from "../../components/filter/Filter";
import CarCatalog from "../../components/car-catalog/CarCatalog";
import Footer from "../../components/footer/Footer";

function Search() {
    const [carsData, setCarsData] = useState([]);
    const [searchParameter, setSearchParameter] = useState({});

    const isObjectEmpty = (obj) => {
        return (
            Object.keys(obj).length === 0 &&
            Object.values(searchParameter).every(
                (value) => value === "" || value === null || value === undefined
            )
        );
    };

    useEffect(() => {
        if (!isObjectEmpty(searchParameter)) {
            handleSearchCar();
        }
    }, [searchParameter]);

    function handleSearchCar() {
        const GET_CUSTOMER_CAR_URL = `https://api-car-rental.binaracademy.org/customer/v2/car?name=${searchParameter.name}&category=${searchParameter.category}&isRented=${searchParameter.isRented}&minPrice=${searchParameter.minPrice}&maxPrice=${searchParameter.maxPrice}`;
        Axios.get(GET_CUSTOMER_CAR_URL)
            .then((data) => {
                setCarsData(data.data.cars);
            })
            .catch((error) => console.log(error));
    }

    return (
        <div className="search-page">
            <Header />
            <Hero />
            <Filter
                searchParameter={searchParameter}
                setSearchParameter={setSearchParameter}
            />
            <CarCatalog carsData={carsData} setCarsData={setCarsData} />
            <Footer />
        </div>
    );
}

export default Search;
