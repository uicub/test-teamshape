/* eslint-disable @typescript-eslint/no-floating-promises */
import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Home } from "react-feather";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Form, Input, Button } from "antd";
import "antd/lib/form/style/index.css";
import "antd/lib/input/style/index.css";
import "antd/lib/button/style/index.css";
import signupImg from "../../assets/images/user/signup.svg"
import { constants } from "./Signup.constants";
import styles from "./Signup.module.css";
import session from "../../stores/sessionStore";
import "../../assets/css/Apps.scss";

const { Password } = Input;

const Signup = () => {
    return (
        <>
            <div className="back-to-home rounded d-none d-sm-block">
                <Link to="/" className="btn btn-icon btn-soft-primary">
                    <Home />
                </Link>
            </div>
            <section className="bg-auth-home d-table w-100">
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
                            <Card className="login_page shadow rounded border-0">
                                <CardBody>
                                    <h4 className="card-title text-center">
                                        Signup
                                    </h4>

                                    <Form
                                        name="login"
                                        onFinish={(data) => {
                                            session.signup(data);
                                        }}
                                    >
                                        <Form.Item
                                            name="first_name"
                                            rules={[
                                                {
                                                    type: "string",
                                                    message:
                                                        constants.errors
                                                            .nameRequired,
                                                },
                                                {
                                                    required: true,
                                                    message:
                                                        constants.errors
                                                            .nameRequired,
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder={
                                                    constants.strings
                                                        .firstnameLabel
                                                }
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            name="last_name"
                                            rules={[
                                                {
                                                    type: "string",
                                                    message:
                                                        constants.errors
                                                            .nameRequired,
                                                },
                                                {
                                                    required: true,
                                                    message:
                                                        constants.errors
                                                            .nameRequired,
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder={
                                                    constants.strings
                                                        .lastnameLabel
                                                }
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            name="company_name"
                                            rules={[
                                                {
                                                    type: "string",
                                                    message:
                                                        constants.errors
                                                            .companyRequired,
                                                },
                                                {
                                                    required: true,
                                                    message:
                                                        constants.errors
                                                            .companyRequired,
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder={
                                                    constants.strings
                                                        .companyLabel
                                                }
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            name="email"
                                            rules={[
                                                {
                                                    type: "email",
                                                    message:
                                                        constants.errors
                                                            .emailInvalid,
                                                },
                                                {
                                                    required: true,
                                                    message:
                                                        constants.errors
                                                            .emailRequired,
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder={
                                                    constants.strings.emailLabel
                                                }
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            name="password"
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        constants.errors
                                                            .passwordRequired,
                                                },
                                                {
                                                    min: 8,
                                                    message:
                                                        constants.errors
                                                            .passwordInvalid,
                                                },
                                            ]}
                                        >
                                            <Password
                                                placeholder={
                                                    constants.strings
                                                        .passwordLabel
                                                }
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            name="password2"
                                            rules={[
                                                {
                                                    required: true,
                                                    min: 8,
                                                    message:
                                                        constants.errors
                                                            .passwordRequired,
                                                },
                                                {
                                                    min: 8,
                                                    message:
                                                        constants.errors
                                                            .passwordInvalid,
                                                },
                                            ]}
                                        >
                                            <Password
                                                placeholder={
                                                    constants.strings
                                                        .password2Label
                                                }
                                            />
                                        </Form.Item>
                                        {session.signUpError && (
                                            <div className={styles.error}>
                                                {session.signUpError}
                                            </div>
                                        )}
                                        <Form.Item>
                                            <Button
                                                type="primary"
                                                htmlType="submit"
                                                block
                                            >
                                                {constants.strings.signup}
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default observer(Signup);
