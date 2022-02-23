import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import HomeImage from "../../assets/images/app/home.png";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Section = () => {
    return (
        <>
            <section className="bg-half-170 d-table w-100" id="home">
                <Container>
                    <Row className="mt-5 align-items-center">
                        <Col lg={6} md={7}>
                            <div className="title-heading">
                                <h1 className="heading mb-3">
                                    Employee Success Platform
                                </h1>
                                <h5>
                                    Engagement | Performance | Development |
                                    Retention
                                </h5>
                                <p className="para-desc text-muted">
                                    Employee success guides business success.
                                    Our engagement, performance, development and
                                    retention platform unlocks employee
                                    potential and achieve business success.
                                </p>
                                <div className="mt-4">
                                    <Link
                                        to="/signup"
                                        className="btn btn-primary mt-2 me-2"
                                    >
                                        <i className="uil uil-apple" /> Signup
                                    </Link>
                                    <Link
                                        to="/login"
                                        className="btn btn-outline-primary mt-2 ms-1"
                                    >
                                        <i className="uil uil-google-play" />{" "}
                                        Login
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col
                            lg={6}
                            md={5}
                            className="mt-4 pt-2 mt-sm-0 pt-sm-0"
                        >
                            <div className="text-md-end text-center ms-lg-4">
                                <img
                                    src={HomeImage}
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Section;
