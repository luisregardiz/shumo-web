import React from "react";
import { phaseOne } from "../../../helpers/roadmap";
import Parchment from "../../../images/roadmap/parchment-roadmap.svg";
import CheckIcon from "../../../images/icons/check-icon.svg";
import ShumoRoadmapOne from "../../../images/roadmap/shumo-roadmap-1.png";
const PhaseOne = () => {
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
                src={ShumoRoadmapOne}
                alt="Shumo roadmap 1"
                className="absolute -top-44"
            />
            <div className="pt-24 flex flex-col items-center">
                <h4 className="text-4xl text-shumo-red font-bold uppercase">
                    Phase 1
                </h4>
                <h4 className="text-4xl text-shumo-red font-bold uppercase">
                    Jan 2022
                </h4>
            </div>
            <div className="mt-12">
                <ul className="space-y-1">
                    {phaseOne.map((item, index) => (
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

export default PhaseOne;
