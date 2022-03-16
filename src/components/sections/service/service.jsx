import React from "react";
import Flag from "../../../images/service/flag.svg";
import ShumoIcon from "../../../images/service/shumo-icon.png";
import {
    IoPeopleOutline,
    IoShieldCheckmarkOutline,
    IoTrendingDown,
} from "react-icons/io5";

const Service = () => {
    const flags = [
        {
            id: 1,
            title: "SWORN TO SERVE AND PROTECT",
            description:
                "SHUMO is a crypto-take on a Choose-Your-Own-Adventure book, putting you at the beating heart of all decisions that affect this project.",
            icon: ShumoIcon,
        },
        {
            id: 2,
            title: "COMMUNITY-DRIVEN INVESTMENT FUND",
            description:
                "YOU vote for SHUMO to squash some supply, or how to use the marketing funds. This can include investing in other projects, bluechip NFTs and funnelling profits to holders.",
            icon: <IoPeopleOutline className="text-6xl text-shumo-softRed" />,
        },
        {
            id: 3,
            title: "GRANDMASTER WRITTEN CONTACT, AUDIT ONBOARDING WITH THE BEST",
            description:
                "Contract written by legendary Trynos, audit in progress with Certik.",
            icon: (
                <IoShieldCheckmarkOutline className="text-6xl text-shumo-softRed mt-2" />
            ),
        },
        {
            id: 4,
            title: "MIGHTY DEFLATIONARY",
            description:
                "Periodic buybacks and burns ensure the supply stays deflationary – to make SHUMO the Grand Champion of the Ethereum smart chain.",
            icon: (
                <IoTrendingDown className="text-6xl text-shumo-softRed mt-2" />
            ),
        },
    ];

    return (
        <section className="max-w-screen-xl mx-auto flex flex-col h-full my-20 px-5">
            <h2 className="text-center font-bold text-4xl text-shumo-softBrown mb-8">
                A UNSTOPPABLE SHIBA AT YOUR SERVICE
            </h2>
            <div className="list-flags mb-10">
                {flags.map((flag) => (
                    <div key={flag.id} className="card-service">
                        <div
                            style={{
                                background: `url(${Flag}) no-repeat`,
                                height: "200px",
                                width: "273px",
                            }}
                            className="absolute -top-32 flex items-center justify-center   "
                        >
                            {flag.id === 1 ? (
                                <img src={flag.icon} className="w-20 mt-2" />
                            ) : (
                                flag.icon
                            )}
                        </div>
                        <h3 className="font-bold text-shumo-red text-xl text-center mb-5">
                            {flag.title}
                        </h3>
                        <p className="font-semibold text-center">
                            {flag.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Service;
