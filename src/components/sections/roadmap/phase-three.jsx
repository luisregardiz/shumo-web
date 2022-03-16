import React from "react";
import { phaseThree } from "../../../helpers/roadmap";
import ShumoRoadmapThree from "../../../images/roadmap/shumo-roadmap-3.png";
import Parchment from "../../../images/roadmap/parchment-roadmap.svg";
import CheckIcon from "../../../images/icons/check-icon.svg";
const PhaseThree = () => {
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
                src={ShumoRoadmapThree}
                alt="Shumo roadmap 1"
                className="absolute -top-40"
            />
            <div className="pt-24 flex flex-col items-center">
                <h4 className="text-4xl text-shumo-red font-bold uppercase">
                    Phase 3
                </h4>
                <h4 className="text-4xl text-shumo-red font-bold uppercase">
                    March 2022
                </h4>
            </div>
            <div className="mt-12">
                <ul className="space-y-1">
                    {phaseThree.map((item, index) => (
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

export default PhaseThree;
