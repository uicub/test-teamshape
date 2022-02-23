import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Input, Label } from "reactstrap";
import {
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Mail,
    Phone,
    MapPin,
    User,
    Book,
    MessageCircle,
} from "react-feather";

// Import Icons
// import FeatherIcon from "feather-icons-react";

// import images
// import americanEx from "../../assets/images/payments/american-ex.png";
// import discover from "../../assets/images/payments/discover.png";
// import masterCard from "../../assets/images/payments/master-card.png";
// import paypal from "../../assets/images/payments/paypal.png";
// import visa from "../../assets/images/payments/visa.png";

// Import Images
import logolight from "../../assets/images/Logo.png";

type MyProps = unknown;
type MyState = {
    grid1: Array<{
        title: string;
        link: string;
        id: number;
    }>;
};

class Footer extends Component<MyProps, MyState> {
    constructor(props: MyState) {
        super(props);
        this.state = {
            grid1: [
                { title: "Features", link: "/page-aboutus", id: 1 },
                { title: "Pricing", link: "/page-services", id: 2 },
                { title: "Blog", link: "/page-team", id: 3 },
                { title: "Login", link: "/login", id: 4 },
            ],
        };
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render() {
        const { grid1 } = this.state;
        return (
            <>
                <footer className="footer">
                    <Container>
                        <Row>
                            <Col
                                lg="4"
                                xs="12"
                                className="mb-0 mb-md-4 pb-0 pb-md-2"
                                name="footercolumn"
                            >
                                <Link to="/" className="logo-footer">
                                    <img src={logolight} height="24" alt="" />
                                </Link>
                                <p className="text-foot mt-4">
                                    Our engagement, performance, development and
                                    tetention platform empower your employees to
                                    stay focused and engaged and deliver
                                    powerful business result. Keep your
                                    employees connected, aligned, and on the
                                    path to success
                                </p>
                                <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                                    <li className="list-inline-item me-1">
                                        <Link to="/" className="rounded">
                                            {/* <FeatherIcon
                                                icon="facebook"
                                                className="fea icon-sm fea-social"
                                            /> */}
                                            <Facebook />
                                        </Link>
                                    </li>
                                    <li className="list-inline-item me-1">
                                        <Link to="/" className="rounded">
                                            {/* <FeatherIcon
                                                icon="instagram"
                                                className="fea icon-sm fea-social"
                                            /> */}
                                            <Instagram />
                                        </Link>
                                    </li>
                                    <li className="list-inline-item me-1">
                                        <Link to="/" className="rounded">
                                            {/* <FeatherIcon
                                                icon="twitter"
                                                className="fea icon-sm fea-social"
                                            /> */}
                                            <Twitter />
                                        </Link>
                                    </li>
                                    <li className="list-inline-item me-1">
                                        <Link to="/" className="rounded">
                                            {/* <FeatherIcon
                                                icon="linkedin"
                                                className="fea icon-sm fea-social"
                                            /> */}
                                            <Linkedin />
                                        </Link>
                                    </li>
                                </ul>
                            </Col>

                            <Col
                                lg="2"
                                md="4"
                                xs="12"
                                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                                name="footercolumn"
                            >
                                <ul className="list-unstyled footer-list mt-4">
                                    {grid1.map((grid) => (
                                        <li key={grid.id}>
                                            <Link
                                                to={grid.link}
                                                className="text-foot"
                                            >
                                                <i className="mdi mdi-chevron-right me-1" />{" "}
                                                {grid.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Col>

                            <Col
                                lg="3"
                                md="4"
                                xs="12"
                                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                                name="footercolumn"
                            >
                                <h5 className="text-light footer-head">
                                    Contact Detail
                                </h5>
                                <div className="d-flex contact-detail align-items-center ">
                                    <div className="icon">
                                        <Mail className="me-3" />
                                    </div>
                                    <div className="flex-1 content">
                                        <p className=" title fw-bold mb-0 text-foot">
                                            Email
                                        </p>

                                        <p className="text-foot">
                                            support@workior.com
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex contact-detail align-items-center">
                                    <div className="icon">
                                        <Phone className="me-3" />
                                    </div>
                                    <div className="flex-1 content">
                                        <p className="title fw-bold mb-0 text-foot">
                                            <b>Phone</b>
                                        </p>

                                        <p className="text-foot">
                                            916-800-1425
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex contact-detail align-items-center">
                                    <div className="icon">
                                        <MapPin className="me-3" />
                                    </div>
                                    <div className="flex-1 content">
                                        <p className="title fw-bold mb-0 text-foot">
                                            <b>Location</b>
                                        </p>
                                        <p className="text-foot">
                                            717 K Street STE #207 Sacramento, CA
                                            95814
                                        </p>
                                    </div>
                                </div>
                            </Col>

                            <Col
                                lg="3"
                                md="4"
                                xs="12"
                                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                                name="footercolumn"
                            >
                                <Form>
                                    <Row>
                                        <Col lg="6">
                                            <div className="mb-3">
                                                <Label className="form-label">
                                                    Name{" "}
                                                    <span className="text-danger">
                                                        *
                                                    </span>
                                                </Label>
                                                <div className="form-icon position-relative">
                                                    {/* <FeatherIcon
                                                        icon="user"
                                                        className="fea icon-sm icons"
                                                    /> */}
                                                    <User className="icons" size={16} />
                                                </div>
                                                <Input
                                                    type="text"
                                                    name="name"
                                                    id="userName"
                                                    className="ps-5 rounded"
                                                    placeholder="Name : "
                                                    required
                                                />
                                            </div>
                                        </Col>
                                        <Col lg="6">
                                            <div className=" mb-3">
                                                <Label className="form-label">
                                                    Email{" "}
                                                    <span className="text-danger">
                                                        *
                                                    </span>
                                                </Label>
                                                <div className="form-icon position-relative">
                                                    {/* <FeatherIcon
                                                        icon="mail"
                                                        className="fea icon-sm icons"
                                                    /> */}
                                                    <Mail className="icons" size={16}/>
                                                </div>
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    id="emailsubscribe"
                                                    className="ps-5 rounded"
                                                    placeholder="Email : "
                                                    required
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="12">
                                            <div className=" mb-3">
                                                <Label className="form-label">
                                                    Subject{" "}
                                                    <span className="text-danger">
                                                        *
                                                    </span>
                                                </Label>
                                                <div className="form-icon position-relative">
                                                    {/* <FeatherIcon
                                                        icon="book"
                                                        className="fea icon-sm icons"
                                                    /> */}
                                                    <Book className="icons" size={16} />
                                                </div>
                                                <Input
                                                    type="text"
                                                    name="suject"
                                                    id="userName"
                                                    className="ps-5 rounded"
                                                    placeholder="Subject : "
                                                    required
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="12">
                                            <div className=" mb-3">
                                                <Label className="form-label">
                                                    Comment{" "}
                                                    <span className="text-danger">
                                                        *
                                                    </span>
                                                </Label>
                                                <div className="form-icon position-relative">
                                                    {/* <FeatherIcon
                                                        icon="message-circle"
                                                        className="fea icon-sm icons"
                                                    /> */}
                                                    <MessageCircle className="icons" size={16} />
                                                </div>
                                                <Input
                                                    type="textarea"
                                                    name="comment"
                                                    id="idComment"
                                                    className="ps-5 rounded"
                                                    placeholder="Your comment : "
                                                    required
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="12">
                                            <div className="d-grid">
                                                <button
                                                    type="submit"
                                                    id="submitsubscribefooter"
                                                    className="btn btn-primary bg-primary"
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </footer>
                <footer className="footer footer-bar">
                    <Container className="text-center">
                        <Row className="align-items-center">
                            <Col sm="6">
                                <div className="text-sm-start">
                                    <p className="mb-0">
                                        © 2021 workior.com | Terms & Conditions
                                        | Privacy Policy
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </>
        );
    }
}

export default Footer;
