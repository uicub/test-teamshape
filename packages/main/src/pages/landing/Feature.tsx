// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

// Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import FeatureBox from "./feature-box";

// import images
import featureImg from "../../assets/images/app/feature.png";

type MyProps = unknown;
type MyState = {
    features: Array<{ id: number; icon: string; title: string; desc: string }>;
};

class Feature extends Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);
        this.state = {
            features: [
                {
                    id: 1,
                    icon: "monitor",
                    title: "Use On Any Device",
                    desc:
                        "Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.",
                },
                {
                    id: 2,
                    icon: "feather",
                    title: "Feather Icons",
                    desc:
                        "Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.",
                },
                {
                    id: 3,
                    icon: "eye",
                    title: "Retina Ready",
                    desc:
                        "Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.",
                },
                {
                    id: 4,
                    icon: "user-check",
                    title: "W3c Valid Code",
                    desc:
                        "Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.",
                },
                {
                    id: 6,
                    icon: "smartphone",
                    title: "Fully Responsive",
                    desc:
                        "Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.",
                },
                {
                    id: 7,
                    icon: "heart",
                    title: "Browser Compatibility",
                    desc:
                        "Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.",
                },
            ],
        };
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render() {
        const { features } = this.state;
        return (
            <>
                <section className="section bg-light">
                    <Container>
                        {/* section title */}
                        <SectionTitle
                            title="App Features"
                            desc="that can provide everything you need to generate awareness, drive traffic, connect."
                        />

                        <Row className="justify-content-center align-items-center">
                            <Col lg="8" md="8">
                                <Row>
                                    <FeatureBox features={features} />
                                </Row>
                            </Col>
                            <Col
                                lg="4"
                                md="4"
                                xs="12"
                                className="mt-4 pt-2 text-center text-md-end"
                            >
                                <img
                                    src={featureImg}
                                    className="img-fluid"
                                    alt=""
                                />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default Feature;
