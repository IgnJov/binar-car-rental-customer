import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        console.log(email, password);
        await axios
            .post(
                "https://api-car-rental.binaracademy.org/customer/auth/register",
                {
                    email: email,
                    password: password,
                    role: "customer",
                }
            )
            .then((response) => {
                navigate("/login");
                console.log(response);
            })
            .catch((error) => {
                if (error.response.data.message) {
                    setErrorMessage(error.response.data.message);
                    console.log(error);
                }
                setErrorMessage("form tidak valid");
            });
    };

    return (
        <div className="register">
            <div className="left">
                <div className="formtitle">
                    <h1>BCR</h1>
                    <h2>SignUp</h2>
                    {errorMessage !== "" && (
                        <div className="errorMessage">
                            <span>{errorMessage} </span>
                        </div>
                    )}
                    <Form onSubmit={handleClick}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Name"
                            />
                        </Form.Group>
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
                            SignUp
                        </Button>
                    </Form>
                    <span>
                        Already have an account?{" "}
                        <a href="/login">Sign In Here </a>
                    </span>
                </div>
            </div>
            <div className="right">
                <img src="./images/Group83.png" alt=""></img>
            </div>
        </div>
    );
};

export default Register;
