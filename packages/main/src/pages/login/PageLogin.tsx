// React Basic and Bootstrap
import React from "react";
import { Link } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
} from "reactstrap";
import { Home } from "react-feather";
import { StyledSignin } from "../../containers/signin/style";
import SigninForm from "../../components/signin-form";

// Import Icons
import "../../assets/css/Apps.scss";


// import images
import loginImg from "../../assets/images/user/login.svg";

type LoginProps = unknown

const PageLogin: React.FC<LoginProps> = () => {
        return (
            <>
                <div className="back-to-home rounded d-none d-sm-block">
                    <Link to="/" className="btn btn-icon btn-soft-primary">
                        <Home width={20} height={20} />
                    </Link>
                </div>
                <section className="bg-home d-flex align-items-center">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg="7" md="6">
                                <div className="me-lg-5">
                                    <img
                                        src={loginImg}
                                        className="img-fluid d-block mx-auto"
                                        alt=""
                                    />
                                </div>
                            </Col>
                            <Col lg="5" md="6">
                                <Card className="login-page bg-white shadow rounded border-0">
                                    <CardBody>
                                        <StyledSignin>
                                            <SigninForm />
                                        </StyledSignin>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    
}
export default PageLogin;
