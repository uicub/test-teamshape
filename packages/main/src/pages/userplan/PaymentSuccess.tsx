import React from "react";
import { Button } from "@doar/components";
import { Col, Row } from "antd";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import TickIcon from "../../assets/icon/tick.svg";
import styles from "./Plan.module.css";
import Layout from "../../layouts";
import Content from "../../layouts/content";

const PaymentSuccess: React.FC = () => {
    return (
        <>
            <Layout>
                <Content>
                    <section className="d-table w-100">
                        <Container>
                            <Row align="middle">
                                <Col xs={24} xl={6} />
                                <Col xs={24} xl={12}>
                                    {/* <img  src={TickIcon} style={{ display: 'inline-block', verticalAlign: 'middle' }} /> */}
                                    <div className={styles.thankyouWrap}>
                                        <div className={styles.icon}>
                                            <img src={TickIcon} alt="icon" />
                                        </div>
                                        <h4 className="title">
                                            Your subscription activated !!
                                        </h4>
                                        <Link to="/myplan">
                                            <Button
                                                className="btn btn-primary"
                                                type="button"
                                                path="/myplan"
                                            >
                                                My Plan
                                            </Button>
                                        </Link>
                                    </div>
                                </Col>
                                <Col xs={24} xl={6} />
                            </Row>
                            {/* <Row className="align-items-center">
              <Col lg="5" md="4"></Col>
              
              <Col lg="7" md="8" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                
                    <div className="auth-wrapper">
                        <div className="auth-container">
                            <div className={styles.thankyouWrap}>
                                <div className={styles.icon}>
                                    <img src={TickIcon} alt="icon" />
                                </div>
                                <h4 className="title">Your subscription activated !!</h4>
                            
                            </div>
                        </div>
                    </div>
                    
                  
              </Col>
            </Row> */}
                        </Container>
                    </section>
                </Content>
            </Layout>
        </>
    );
};

export default PaymentSuccess;
