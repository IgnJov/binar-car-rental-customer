import React from "react";
import "./Error.css";
import { useRouteError } from "react-router-dom";

function Error() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="container">
            <h1>Ooops!</h1>
            <h3>You seems to be lost..</h3>
            <p>Status: {error.statusText || error.message}</p>
        </div>
    );
}

export default Error;
