import React from "react";
import "./Detail.css";
import Header from "../../components/header/Header";
import Hero from "../../sections/hero/Hero";
import Filter from "../../components/filter/Filter";
import CarDetail from "../../components/car-detail/CarDetail";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";

function Detail() {
    const PARAM = useParams();

    return (
        <div className="detail">
            <Header />
            <Hero />
            <Filter isDisabled={true} />
            <CarDetail carId={PARAM.id} />
            <Footer />
        </div>
    );
}

export default Detail;
