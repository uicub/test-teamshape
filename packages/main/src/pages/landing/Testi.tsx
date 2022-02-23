// React Basic and Bootstrap
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Testi = () => {
    return (
        <>
            <section className="section pt-0">
                <Container>
                    <Row>
                        <Col xs="12" />
                    </Row>

                    <Row className="mt-md-5 pt-md-3 mt-4 pt-2 mt-sm-0 pt-sm-0 justify-content-center">
                        <Col xs="12" className="text-center">
                            <div className="section-title">
                                <h4 className="title mb-4">
                                    Get the App now !
                                </h4>
                                <p className="text-muted para-desc mx-auto">
                                    Start working with{" "}
                                    <span className="text-primary fw-bold">
                                        Landrick
                                    </span>{" "}
                                    that can provide everything you need to
                                    generate awareness, drive traffic, connect.
                                </p>
                                <div className="mt-4">
                                    <Link
                                        to="/"
                                        className="btn btn-primary mt-2 me-2"
                                    >
                                        <i className="mdi mdi-apple" /> App
                                        Store
                                    </Link>
                                    <Link
                                        to="/"
                                        className="btn btn-outline-primary mt-2"
                                    >
                                        <i className="mdi mdi-google-play" />{" "}
                                        Play Store
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Testi;
