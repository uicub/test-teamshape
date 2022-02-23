import React from "react";

type MyProps = {
    children: React.ReactNode;
    title: string;
    desc: string;
    features: Array<{ title: string; id: number }>;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const SectionTitleLeft = (props: MyProps) => {
    const { title, desc, children, features } = props;
    return (
        <>
            {children || <h4 className="title mb-4">{title}</h4>}
            <p className="text-muted"> {desc} </p>
            <ul className="list-unstyled text-muted">
                {features.map((feature,) => (
                    <li key={feature.id} className="mb-0">
                        <span className="text-primary h5 me-2">
                            <i
                                // className="uil uil-check-circle align-middle"
                                className="uil uil-check-circle align-middle "
                            />
                        </span>
                        {feature.title}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default SectionTitleLeft;
