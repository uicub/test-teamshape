// React Basic and Bootstrap
import React, { Component } from "react";
import {
    Container,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col,
} from "reactstrap";
import classnames from "classnames";

// Import Components
import SectionTitleLeft from "../../components/Shared/SectionTitleLeft";

// import images
import app2 from "../../assets/images/app/2.png";
import app3 from "../../assets/images/app/3.png";
import app4 from "../../assets/images/app/4.png";

type MyProps = unknown;
type MyState = {
    features1: Array<{ id: number; title: string }>;
    features2: Array<{ id: number; title: string }>;
    features3: Array<{ id: number; title: string }>;
    features4: Array<{ id: number; title: string }>;
    activeTab: string;
};

class ShowCase extends Component<MyProps, MyState> {
    constructor(props: MyState) {
        super(props);
        this.state = {
            features1: [
                { id: 1, title: "Engagement Surveys" },
                { id: 2, title: "Pulse Surveys" },
                { id: 3, title: "Life cycle Surveys" },
            ],
            features2: [
                { id: 1, title: "Engagement Surveys" },
                { id: 2, title: "Pulse Surveys" },
                { id: 3, title: "Life cycle Surveys" },
            ],
            features3: [
                { id: 1, title: "Engagement Surveys" },
                { id: 2, title: "Pulse Surveys" },
                { id: 3, title: "Life cycle Surveys" },
            ],
            features4: [
                { id: 1, title: "Engagement Surveys" },
                { id: 2, title: "Pulse Surveys" },
                { id: 3, title: "Life cycle Surveys" },
            ],
            activeTab: "1",
        };
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render() {
        const {
            features1,
            features2,
            features3,
            features4,
            activeTab,
        } = this.state;
        return (
            <>
                <section className="section pt-0 bg-light">
                    <Container className="">
                        <Row className="justify-content-center">
                            <Col xs="12" className="text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title mb-4">
                                        <span className="text-primary">
                                            Our Platform
                                        </span>
                                    </h4>
                                    <p className="text-muted para-desc mb-0 mx-auto">
                                        Start working with{" "}
                                        <span className="text-primary fw-bold">
                                            Landrick
                                        </span>{" "}
                                        that can provide everything you need to
                                        generate awareness, drive traffic,
                                        connect.
                                    </p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col
                                lg={8}
                                md={12}
                                className="mt-4 pt-2 text-center"
                            >
                                <Nav
                                    pills
                                    justified
                                    id="pills-tab"
                                    className="flex-column flex-sm-row rounded"
                                >
                                    <NavItem>
                                        <NavLink
                                            className={classnames(
                                                {
                                                    active: activeTab === "1",
                                                },
                                                "rounded"
                                            )}
                                        >
                                            <div className="text-center py-2">
                                                <h6 className="mb-0">
                                                    Engagement
                                                </h6>
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames(
                                                {
                                                    active: activeTab === "2",
                                                },
                                                "rounded"
                                            )}
                                        >
                                            <div className="text-center py-2">
                                                <h6 className="mb-0">
                                                    Performance
                                                </h6>
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames(
                                                {
                                                    active: activeTab === "3",
                                                },
                                                "rounded"
                                            )}
                                        >
                                            <div className="text-center py-2">
                                                <h6 className="mb-0">
                                                    Development
                                                </h6>
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames(
                                                {
                                                    active: activeTab === "4",
                                                },
                                                "rounded"
                                            )}
                                        >
                                            <div className="text-center py-2">
                                                <h6 className="mb-0">
                                                    Retention
                                                </h6>
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs="12" className="mt-4 pt-2">
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="1">
                                        <Row className="align-items-center">
                                            <Col md={6}>
                                                <img
                                                    src={app2}
                                                    className="img-fluid mx-auto d-block"
                                                    alt=""
                                                />
                                            </Col>

                                            <Col
                                                md={6}
                                                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                                            >
                                                <div className="section-title">
                                                    <SectionTitleLeft
                                                        title=""
                                                        desc="collect feedback from everyone in the organization and use connected analytics to plan effective action. Act on feedback provided by employees and turn your company into the best place to work"
                                                        features={features1}
                                                    >
                                                        <h4 className="title mb-4">
                                                            <i className="uil uil-angle-double-right text-primary" />{" "}
                                                            Engagement
                                                        </h4>
                                                    </SectionTitleLeft>
                                                </div>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <Row className="align-items-center">
                                            <Col md={6}>
                                                <img
                                                    src={app3}
                                                    className="img-fluid mx-auto d-block"
                                                    alt=""
                                                />
                                            </Col>

                                            <Col
                                                md={6}
                                                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                                            >
                                                <div className="section-title">
                                                    <SectionTitleLeft
                                                        title=""
                                                        desc="get the most out of your performance reviews with our customized, multi-faceted approach. Our platform is great for managers to measure, support and elevate their teams performance."
                                                        features={features2}
                                                    >
                                                        <h4 className="title mb-4">
                                                            <i className="uil uil-angle-double-right text-primary" />{" "}
                                                            Performance
                                                        </h4>
                                                    </SectionTitleLeft>
                                                </div>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <Row className="align-items-center">
                                            <Col md={6}>
                                                <img
                                                    src={app4}
                                                    className="img-fluid mx-auto d-block"
                                                    alt=""
                                                />
                                            </Col>

                                            <Col
                                                md={6}
                                                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                                            >
                                                <div className="section-title">
                                                    <SectionTitleLeft
                                                        title=""
                                                        desc="Our platform provides an integrated employee growth and development workflow that turns managers into leaders, giving their teams a reason to stay motivated and engaged. "
                                                        features={features3}
                                                    >
                                                        <h4 className="title mb-4">
                                                            <i className="uil uil-angle-double-right text-primary" />
                                                            Development
                                                        </h4>
                                                    </SectionTitleLeft>
                                                </div>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="4">
                                        <Row className="align-items-center">
                                            <Col md={6}>
                                                <img
                                                    src={app4}
                                                    className="img-fluid mx-auto d-block"
                                                    alt=""
                                                />
                                            </Col>

                                            <Col
                                                md={6}
                                                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                                            >
                                                <div className="section-title">
                                                    <SectionTitleLeft
                                                        desc="We help the company's combined efforts to retain their existing staff and fine-tune compensation and benefits, a nice working environment, training, and career development, and clear communication.  "
                                                        features={features4}
                                                        title=""
                                                    >
                                                        <h4 className="title mb-4">
                                                            <i className="uil uil-angle-double-right text-primary" />
                                                            Retention
                                                        </h4>
                                                    </SectionTitleLeft>
                                                </div>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                </TabContent>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default ShowCase;
