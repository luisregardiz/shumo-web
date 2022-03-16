import React from "react";
import Parchment from "../../../images/roadmap/parchment-roadmap.svg";
import CheckIcon from "../../../images/icons/check-icon.svg";
import { phaseFour } from "../../../helpers/roadmap";
import ShumoRoadmapFour from "../../../images/roadmap/shumo-roadmap-4.png";
const PhaseFour = () => {
    return (
        <div
            style={{
                background: `url(${Parchment}) no-repeat`,
                height: "640px",
                width: "100%",
                backgroundSize: "contain",
                backgroundPosition: "center",
            }}
            className="flex flex-col  items-center relative mt-40"
        >
            <img
                src={ShumoRoadmapFour}
                alt="Shumo roadmap 1"
                className="absolute -top-40 "
            />
            <div className="pt-24 flex flex-col items-center">
                <h4 className="text-4xl text-shumo-red font-bold uppercase">
                    Phase 4
                </h4>
                <h4 className="text-4xl text-shumo-red font-bold uppercase">
                    Q2/Q3 2022
                </h4>
            </div>
            <div className="mt-12">
                <ul className="space-y-1 w-3/4 mx-auto pl-8 ">
                    {phaseFour.map((item, index) => (
                        <li
                            key={index}
                            className="flex space-x-2 items-center text-shumo-softBrown"
                        >
                            {item.isCompleted && (
                                <img src={CheckIcon} alt="Check icon" />
                            )}
                            <span>{item.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PhaseFour;
