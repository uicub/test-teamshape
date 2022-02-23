import React from "react";
import { Col } from "reactstrap";

// Import Icons
// import FeatherIcon from "feather-icons-react";

type MyProps = {
    features: Array<{
        title: string;
        desc: string;
        id: number;
        icon: string;
    }>;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const FeatureBox = (props: MyProps) => {
    const { features } = props;
    return (
        <>
            {features.map((feature,) => (
                <Col key={feature.id} md="6" xs="12">
                    <div className="d-flex features pt-4 pb-4">
                        <div className="icon text-center rounded-circle text-primary me-3 mt-2">
                            {/* <i>
                                <FeatherIcon
                                    icon={feature.icon}
                                    className="fea icon-ex-md text-primary"
                                />
                            </i> */}
                        </div>
                        <div className="flex-1">
                            <h4 className="title">{feature.title}</h4>
                            <p className="text-muted para mb-0">
                                {feature.desc}
                            </p>
                        </div>
                    </div>
                </Col>
            ))}
        </>
    );
};
export default FeatureBox;
