import React from "react";
import Hero from "../components/sections/hero/hero";
import Divider from "../components/divider/divider";
import Service from "../components/sections/service/service";
import Tokenomics from "../components/sections/tokenomics/tokenomics";

import Token from "../components/sections/token/token";
import Roadmap from "../components/sections/roadmap/roadmap";
import Buy from "../components/sections/buy/buy";
const Home = () => {
    return (
        <>
            <Hero />
            <Divider />
            <Service />
            <Divider />
            <Tokenomics />
            <Divider />
            <Roadmap />
            <Divider />
            <Buy />
            <Token />
            <Divider />
        </>
    );
};

export default Home;
