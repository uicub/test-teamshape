import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Section from "./Section";
import Feature from "./Feature";
import ShowCase from "./ShowCase";
import Pricing from "./Pricing";
import Testi from "./Testi";

import Footer from "../../components/landing/Footer";
import "../../assets/css/materialdesignicons.min.css";
import "../../assets/css/Apps.scss";

// import "../../assets/css/colors/default.css";
import LogoImg from "../../assets/images/Logo.png";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Index = () => {
    // useEffect(() => {
    //   window.addEventListener("scroll", scrollNavigation, true);
    // },
    // componentDidMount() {
    //   document.body.classList = "";
    //   window.addEventListener("scroll", this.scrollNavigation, true);
    // }
    // // Make sure to remove the DOM listener when the component is unmounted.
    // componentWillUnmount() {
    //   window.removeEventListener("scroll", this.scrollNavigation, true);
    // }
    const scrollNavigation = () => {
        const doc = document.documentElement;
        const top =
            (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        const topNav = document.getElementById("topnav");
        if (topNav) {
            if (top > 80) {
                topNav.classList.add("nav-sticky");
            } else {
                topNav.classList.remove("nav-sticky");
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollNavigation);

        return () => {
            window.removeEventListener("scroll", scrollNavigation);
        };
    }, []);

    return (
        <>
            <header id="topnav" className="defaultscroll sticky">
                <div className="container">
                    <div>
                        <a className="logo" href="index.html">
                            <img
                                src={LogoImg}
                                height="24"
                                className="logo-light-mode"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="buy-button">
                        <Link className="btn btn-primary mx-2" to="/signup">
                            Signup
                        </Link>
                        <Link className="btn btn-success" to="/login">
                            Login
                        </Link>
                    </div>
                    <div id="navigation">
                        <ul className="navigation-menu" id="top-menu">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/">Features</Link>
                            </li>
                            <li>
                                <Link to="/">Price</Link>
                            </li>
                            <li>
                                <Link to="/">Blog</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="buy-menu-btn d-none">
                        <Link className="btn btn-primary" to="/signup">
                            Signup
                        </Link>
                    </div>
                </div>
            </header>
            {/* section */}
            <Section />

            <div className="position-relative">
                <div className="shape overflow-hidden text-light">
                    <svg
                        viewBox="0 0 2880 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            </div>

            {/* Feature */}
            <Feature />

            <ShowCase />
            <div className="position-relative">
                <div className="shape overflow-hidden text-light">
                    <svg
                        viewBox="0 0 2880 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            </div>

            {/* Pricing */}
            <Pricing />

            {/* Testi */}
            <Testi />
            <div className="position-relative">
                <div className="shape overflow-hidden text-footer">
                    <svg
                        viewBox="0 0 2880 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Index;
