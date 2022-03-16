import React from "react";
import StatsChart from "./chart";
import JapeneseTexture from "../../../images/japenese-texture.svg";
const Token = () => {
    return (
        <section className="relative">
            <StatsChart />
            <img
                src={JapeneseTexture}
                alt="Japenese texture"
                className="absolute top-0 -z-10"
            />
        </section>
    );
};

export default Token;
