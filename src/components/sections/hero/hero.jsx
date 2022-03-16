import React from "react";
import Shumo from "../../../images/shumo.svg";
import "./hero.css";
const Hero = () => {
    return (
        <section id="home" className="bg-hero">
            <div className="max-w-screen-xl mx-auto flex md:flex-row flex-col h-full md:pt-20 pt-5 px-5">
                <div className="basis-1/2 flex flex-col">
                    <h2 className="md:text-5xl text-3xl font-bold text-shumo-brown  ">
                        THE WORLD'S
                    </h2>
                    <h2 className="md:text-5xl text-3xl font-bold text-shumo-brown mb-5 ">
                        MOST POWERFUL SHIB
                    </h2>
                    <span className="text-lg font-medium text-shumo-brown">
                        SHUMO is an earth-shattering deflationary token on the
                        ETH blockchain. Community controlled, SHUMO's immense
                        power is at your fingertips.
                    </span>
                    <a
                        href="https://app.uniswap.org/#/swap?outputCurrency=0xeaa2c985abf14ac850f6614faebd6e4436bea65f&chain=mainnet&inputCurrency=ETH"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="my-10 btn bg-shumo-red text-shumo-softRed w-1/3 mx-auto text-center"
                    >
                        Buy Shumo
                    </a>
                </div>
                <div className="basis-1/2 flex justify-center">
                    <img
                        src={Shumo}
                        alt="Shumo"
                        className="relative md:top-20 top-0 md:w-auto w-3/4"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
