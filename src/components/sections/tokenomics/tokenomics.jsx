import React from "react";
import ShumoHeavy from "../../../images/tokenomics/shumo-heavy.png";
import ShumoGrand from "../../../images/tokenomics/shumo-grand.png";
import ShumoGold from "../../../images/tokenomics/shumo-gold.png";
import ShumoEternal from "../../../images/tokenomics/shumo-eternal.png";
import TokenomicsCard from "../../../images/tokenomics/tokenomics-card.svg";
import Temple from "../../../images/temple.svg";
const Tokenomics = () => {
    const tokenomicsItem = [
        {
            title: "HEAVY HERO ROYALTIES 2% REFLECTIONS",
            description:
                "B​ecome a Shumo heavyweight in your sleep – you earn 2% reflections from every transaction as a loyal hodler.",
            image: ShumoHeavy,
        },
        {
            title: "GRAND CHAMPION BANK 5% LIQUIDITY POOL",
            description:
                "Masterfully safe and secure, 5% of every transaction locked to LP. Defended by grand champions, growing forever.",
            image: ShumoGrand,
        },
        {
            title: "GOLD TSUNAMI MARKETING 3% MARKETING",
            description:
                "Shumo will shake the earth and make big waves. Powered by 3% going towards growth marketing and heavy buy backs.",
            image: ShumoGold,
        },
        {
            title: "ETERNAL EMPIRE FUND 4% TRADING PORTFOLIO",
            description:
                "Investors will control a community investment fund that will buy/sell/farm assets, including NFTs. All profits will go back to holders.",
            image: ShumoEternal,
        },
    ];

    return (
        <section className="max-w-screen-xl mx-auto flex flex-col my-10 px-5 relative">
            <div className="flex flex-col items-center">
                <h2 className="text-center font-bold text-4xl text-shumo-softBrown">
                    SHUMO TOKENOMICS
                </h2>
                <span className="font-bold text-shumo-softBrown">
                    Every transaction makes you stronger
                </span>
            </div>
            <div className="list-tokenomics my-10 place-items-center">
                {tokenomicsItem.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            background: `url(${TokenomicsCard}) no-repeat `,
                            backgroundSize: "cover",
                            height: "410px",
                            width: "280px",
                        }}
                        className="flex flex-col items-center px-5"
                    >
                        <div>
                            <img
                                src={item.image}
                                alt="tokenomics"
                                className="pt-5 ml-5"
                            />
                        </div>
                        <div>
                            <h4 className="text-center font-bold text-shumo-red mb-2">
                                {item.title}
                            </h4>
                            <p className="text-center text-shumo-softBrown">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <img
                src={Temple}
                alt="Temple"
                className="absolute -z-10 -left-60 -top-48"
            />
        </section>
    );
};

export default Tokenomics;
