// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row } from "reactstrap";

// Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import PricingBox2 from "../../components/Shared/PricingBox2";

type MyProps = unknown;
type MyState = {
    pricings: Array<{
        id: number;
        price: number;
        duration: string;
        buttonText: string;
        btnLink: string;
        features: Array<{ id: number; title: string }>;
        title: string;
    }>;
};

class Pricing extends Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);
        this.state = {
            pricings: [
                {
                    id: 1,
                    title: "Free 14",
                    price: 0,
                    duration: "mo",
                    buttonText: "Signup",
                    btnLink: "/signup",
                    features: [
                        { id: 1, title: "Full Access" },
                        { id: 2, title: "Enhanced Security" },
                        { id: 3, title: "Source Files" },
                        { id: 4, title: "1 Domain Free" },
                    ],
                },
                {
                    id: 2,
                    title: "Silver",
                    price: 10,
                    duration: "mo",
                    buttonText: "Signup",
                    btnLink: "/signup",
                    features: [
                        { id: 1, title: "Full Access" },
                        { id: 2, title: "Enhanced Security" },
                        { id: 3, title: "Source Files" },
                        { id: 4, title: "1 Domain Free" },
                    ],
                },
                {
                    id: 3,
                    title: "Gold",
                    price: 20,
                    duration: "mo",
                    buttonText: "Signup",
                    btnLink: "/signup",
                    features: [
                        { id: 1, title: "Full Access" },
                        { id: 2, title: "Enhanced Security" },
                        { id: 3, title: "Source Files" },
                        { id: 4, title: "1 Domain Free" },
                    ],
                },
                {
                    id: 3,
                    title: "Platinum",
                    price: 30,
                    duration: "mo",
                    buttonText: "Signup",
                    btnLink: "/signup",
                    features: [
                        { id: 1, title: "Full Access" },
                        { id: 2, title: "Enhanced Security" },
                        { id: 3, title: "Source Files" },
                        { id: 4, title: "1 Domain Free" },
                    ],
                },
            ],
        };
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render() {
        const { pricings } = this.state;
        return (
            <>
                <section className="section">
                    <Container>
                        {/* section title */}
                        <SectionTitle
                            title="Choose The Pricing Plan"
                            desc="that can provide everything you need to generate awareness, drive traffic, connect"
                        />

                        <Row className="align-items-center">
                            {/* pricing */}
                            <PricingBox2 pricings={pricings} />
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}
export default Pricing;
