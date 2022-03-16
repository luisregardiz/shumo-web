import React, { useState, useEffect } from "react";

import Logo from "../../images/logo.svg";

const Navbar = () => {
    const [navActive, setNavActive] = useState(false);
    const changeNavStyle = () => {
        if (window.scrollY >= 50) {
            setNavActive(true);
        } else {
            setNavActive(false);
        }
    };
    useEffect(() => {
        changeNavStyle();
        window.addEventListener("scroll", changeNavStyle);
    }, []);

    return (
        <div className="bg-shumo-red h-full w-full">
            <header
                className={`md:px-10 px-5 py-4  fixed top-0 w-full  z-10 transition duration-300 ${
                    navActive && "bg-shumo-red"
                }`}
            >
                <div className="max-w-screen-2xl left-0 right-0 mx-auto flex items-center justify-between">
                    <a href="#home">
                        {" "}
                        <img
                            src={Logo}
                            alt="Shumo Logo"
                            className="md:w-48 "
                        />{" "}
                    </a>

                    <nav className="md:block hidden">
                        <ul className="flex items-center space-x-10">
                            <li>
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSf9OZJgu1GVsKtZKYGsdX9yeuH91doIO5h80M2cmxftnf0BAw/viewform"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="uppercase font-bold text-shumo-softRed hover:text-shumo-brown transition"
                                >
                                    Liquidity Loans
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://dashboard.shumo.io/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="uppercase font-bold text-shumo-softRed hover:text-shumo-brown transition"
                                >
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#buy"
                                    className="uppercase font-bold text-shumo-softRed hover:text-shumo-brown transition"
                                >
                                    How to buy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#community"
                                    className="uppercase font-bold text-shumo-softRed hover:text-shumo-brown transition"
                                >
                                    Community
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://shumo.io/files/Whitepaper_Shumo_v3.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="uppercase font-bold text-shumo-softRed hover:text-shumo-brown transition"
                                >
                                    Whitepaper
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
