import React, { useEffect, useState } from "react";
import Order1 from "./Order1/index.jsx"
import Header from "../../components/header/Header";
import "./style.css"

function Order2() {

    return (
        <div className="detail">
            <div>
            <Header />
            </div>
            <div className="order2">
            <Order1 />
            </div>
        </div>
    );
}

export default Order2;