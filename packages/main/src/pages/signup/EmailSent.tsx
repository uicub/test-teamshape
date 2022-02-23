import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { Home } from "react-feather";
import EmailIcon from "../../assets/icon/email-icon.svg";
import signupImg from "../../assets/images/user/signup.svg";
import styles from "./Signup.module.css";
import "../../assets/css/Apps.scss";

const EmailSent: React.FC = () => {
    return (
        <>
            <div className="back-to-home rounded d-none d-sm-block">
                <Link to="/" className="btn btn-icon btn-soft-primary">
                    <Home />
                </Link>
            </div>
            <section className="d-table w-100">
                <Container>
                    <Row className="align-items-center">
                        <Col lg="7" md="6">
                            <div className="me-lg-5">
                                <img
                                    src={signupImg}
                                    className="img-fluid d-block mx-auto"
                                    alt=""
                                />
                            </div>
                        </Col>
                        <Col
                            lg="5"
                            md="6"
                            className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                        >
                            <div className="auth-wrapper">
                                <div className="auth-container">
                                    <div className={styles.thankyouWrap}>
                                        <div className={styles.icon}>
                                            <img src={EmailIcon} alt="icon" />
                                        </div>
                                        <h4 className="title">
                                            Check your Inbox!
                                        </h4>
                                        {/* <p>
                                    We have sent a link to this email:
                                    <Link href="/" as="/">
                                        <a>{router.query.email}</a>
                                    </Link>
                                </p> */}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default EmailSent;
