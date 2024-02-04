import Order1 from "./Order1/index.jsx";
import Header from "../../components/header/Header";
import "./style.css";

function Order2() {
    return (
        <div>
            <Header />
            <div className="order2" style={{ minHeight: "100vh" }}>
                <Order1 />
            </div>
        </div>
    );
}

export default Order2;
