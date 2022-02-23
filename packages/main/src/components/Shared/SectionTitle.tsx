import React from "react";
import { Row, Col } from "reactstrap";

type MyProps = { title: string; desc: string };

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const SectionTitle = (props: MyProps) => {
    const { title, desc } = props;
    return (
        <>
            <Row className="justify-content-center">
                <Col xs="12" className="text-center">
                    <div className="section-title mb-4 pb-2">
                        <h4 className="title mb-4">{title} </h4>
                        <p className="text-muted para-desc mx-auto mb-0">
                            Start working with {desc}
                            <span className="text-primary fw-bold">
                                Landrick
                            </span>{" "}
                        </p>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default SectionTitle;
