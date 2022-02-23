/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { Col, Row, notification, Spin } from "antd";
// import "antd/lib/style/default.css";
import "antd/lib/grid/style/index.css";
import "antd/lib/spin/style/index.css";
import axios from "axios";
import { Home } from "react-feather";
import { Container } from "reactstrap";
import EmailIcon from "../../assets/icon/email-icon.svg";
import signupImg from "../../assets/images/user/signup.svg";
import styles from "./Signup.module.css";
import "../../assets/css/Apps.scss";
import session from "../../stores/sessionStore"


function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const ThankYou: React.FC = () => {
    const [loading, Setloading] = useState(false);
    const [success, Setsuccess] = useState(false);

    const query = useQuery();
    const token = query.get("token");

    useEffect(() => {
        if (token) {
            Setloading(true);

            const baseURL = `${process.env.REACT_APP_BASE_API_URL}`;
            console.log("base url: ", baseURL);
            axios.get(`${baseURL}users/verify-email/${token}`).then((res) => {
                console.log(res);
                if (res.data && res.data.success) {
                    Setsuccess(true);
                    Setloading(false);
                } else {
                    notification.error({
                        message: "Invalid Token",
                    });
                    Setloading(false);
                }
            });
        }
    }, [token]);

    return (
        <>
            <>
                <div className="back-to-home rounded d-none d-sm-block">
                    <Link to="/" className="btn btn-icon btn-soft-primary">
                        <Home />
                    </Link>
                </div>
                <section className=" d-table w-100">
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
                                            {loading ? (
                                                <Spin size="large" />
                                            ) : (
                                                <>
                                                    <div className="icon">
                                                        <img
                                                            src={EmailIcon}
                                                            alt="icon"
                                                        />
                                                    </div>
                                                    <h4 className="title">
                                                        {success
                                                            ? "Email Verified!"
                                                            : "Could not verify email"}
                                                    </h4>
                                                    {success && (
                                                        <p>
                                                            <Link to="/login">
                                                                Let&apos;s sign
                                                                in now: sign in
                                                            </Link>
                                                        </p>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        </>
    );
};

export default ThankYou;
