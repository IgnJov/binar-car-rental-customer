import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        console.log(email, password);
        await axios
            .post(
                "https://api-car-rental.binaracademy.org/customer/auth/login",
                {
                    email: email,
                    password: password,
                }
            )
            .then((response) => {
                localStorage.setItem("token", response.data.access_token);
                navigate("/");
                console.log(response);
            })
            .catch((error) => {
                setErrorMessage(error.response.data.message);
                console.log(error);
            });
    };

    return (
        <div className="login">
            <div className="left">
                <div className="formtitle">
                    <h1>BCR</h1>
                    <h2>Welcome Back!</h2>
                    {errorMessage !== "" && (
                        <div className="errorMessage">
                            <span>{errorMessage} </span>
                        </div>
                    )}
                    <Form onSubmit={handleClick}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Enter Email"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                value={password}
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Enter Password"
                            />
                        </Form.Group>
                        <Button type="submit" variant="primary">
                            Sign In
                        </Button>
                    </Form>
                    <span>
                        Don't have an account?{" "}
                        <a href="/register">Sign Up for free </a>
                    </span>
                </div>
            </div>
            <div className="right">
                <img src="./images/Group83.png" alt=""></img>
            </div>
        </div>
    );
};

export default Login;
