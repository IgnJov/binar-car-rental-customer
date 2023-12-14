import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
    const expand = "md";

    return (
        <header className="w-100 position-absolute">
            <Navbar expand={expand}>
                <Container>
                    <Navbar.Brand href="/">Binar Rental Car</Navbar.Brand>

                    <Navbar.Toggle
                        aria-controls={`offcanvasNavbar-expand-${expand}`}
                    />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title
                                className="fw-bold"
                                id={`offcanvasNavbarLabel-expand-${expand}`}
                            >
                                BCR
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="ms-auto">
                                <Nav.Link className="nav-link text-reset">
                                    Our Services
                                </Nav.Link>
                                <Nav.Link className="nav-link text-reset">
                                    Why Us
                                </Nav.Link>
                                <Nav.Link className="nav-link text-reset">
                                    Testimonial
                                </Nav.Link>
                                <Nav.Link className="nav-link text-reset">
                                    FAQ
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
