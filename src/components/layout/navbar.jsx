import React, { useState, useEffect } from "react";

import Logo from "../../images/logo.svg";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
    const [navActive, setNavActive] = useState(false);
    const [isOpen, setOpen] = useState(false);
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
                        <img
                            src={Logo}
                            alt="Shumo Logo"
                            className="md:w-48 w-36 "
                        />
                    </a>
                    {/* Navbar */}
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
                    {/* Navbar Responsive */}
                    <button
                        onClick={() => setOpen((prev) => !prev)}
                        className="md:hidden block text-4xl text-shumo-softRed z-10"
                    >
                        {isOpen ? <IoCloseSharp /> : <IoMenuSharp />}
                    </button>
                    {isOpen && (
                        <div
                            onClick={() => setOpen(false)}
                            className="fixed h-full w-full left-0 top-0 bg-shumo-red flex flex-col items-center justify-center"
                        >
                            <nav>
                                <ul className="flex flex-col items-center space-y-5 ">
                                    <li>
                                        <a
                                            href="https://docs.google.com/forms/d/e/1FAIpQLSf9OZJgu1GVsKtZKYGsdX9yeuH91doIO5h80M2cmxftnf0BAw/viewform"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="uppercase font-bold text-shumo-softRed hover:text-shumo-brown transition text-2xl"
                                        >
                                            Liquidity Loans
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://dashboard.shumo.io/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="uppercase font-bold text-shumo-softRed hover:text-shumo-brown transition text-2xl"
                                        >
                                            Dashboard
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#buy"
                                            className="uppercase font-bold text-shumo-softRed hover:text-shumo-brown transition text-2xl"
                                        >
                                            How to buy
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#community"
                                            className="uppercase font-bold text-shumo-softRed hover:text-shumo-brown transition text-2xl"
                                        >
                                            Community
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://shumo.io/files/Whitepaper_Shumo_v3.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="uppercase font-bold text-shumo-softRed hover:text-shumo-brown transition text-2xl"
                                        >
                                            Whitepaper
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
};

export default Navbar;
