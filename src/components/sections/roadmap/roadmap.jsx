import React from "react";
import PhaseOne from "./phase-one";
import PhaseTwo from "./phase-two";
import PhaseThree from "./phase-three";
import PhaseFour from "./phase-four";
import TextureRoadmap from "../../../images/roadmap/textures-roadmap.svg";
const Roadmap = () => {
    return (
        <section className="relative">
            <div className="max-w-screen-xl mx-auto flex flex-col my-10 px-5">
                <h2 className="text-center font-bold text-4xl text-shumo-softBrown">
                    ROADMAP
                </h2>
                <div className="list-roadmap mt-20">
                    <PhaseOne />
                    <PhaseTwo />
                    <PhaseThree />
                    <PhaseFour />
                </div>
            </div>
            <img
                src={TextureRoadmap}
                alt="Texture Roadmap"
                className="absolute top-80 -z-10 left-0 right-0 mx-auto"
            />
        </section>
    );
};

export default Roadmap;
