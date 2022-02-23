import React from "react";
import { Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

type MyProps = {
    pricings: Array<{
        id: number;
        price: number;
        duration: string;
        buttonText: string;
        btnLink: string;
        features: Array<{ title: string; id: number }>; // TODO: fix this from upper component
        title: string;
    }>;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const PricingBox2 = (props: MyProps) => {
    const { pricings } = props;
    return (
        <>
            {pricings.map((pricing,) => (
                <Col md="3" xs="12" key={pricing.id} className="mt-4 pt-2">
                    <Card className="pricing-rates bg-light py-5 border-0 rounded text-center">
                        <CardBody>
                            <h6 className="title fw-bold text-uppercase text-primary mb-4">
                                {pricing.title}
                            </h6>
                            <div className="d-flex justify-content-center mb-4">
                                <span className="h4 mb-0 mt-2">$</span>
                                <span className="price h1 mb-0">
                                    {pricing.price}
                                </span>
                                <span className="h4 align-self-end mb-1">
                                    /{pricing.duration}
                                </span>
                            </div>
                            <ul className="list-unstyled mb-0 ps-0">
                                {pricing.features.map((feature,) => (
                                    <li
                                        key={feature.id}
                                        className="h6 text-muted mb-0"
                                    >
                                        <span className="text-primary h5 me-2">
                                            <i className="uil uil-check-circle align-middle" />
                                        </span>
                                        {feature.title}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/signup" className="btn btn-primary mt-4">
                                {pricing.buttonText}
                            </Link>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    );
};

export default PricingBox2;
