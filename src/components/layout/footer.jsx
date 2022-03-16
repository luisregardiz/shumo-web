import React from "react";
import CoinMarketIcon from "../../images/icons/coinmarket-icon.png";
import CoingeckoIcon from "../../images/icons/coingecko-icon.png";
import UniswapIcon from "../../images/icons/uniswap-icon.png";
import DextoolIcon from "../../images/icons/dextool-icon.png";
import CertikIcon from "../../images/icons/certik-icon.png";
import KyCastleIcon from "../../images/icons/kycastle-icon.png";
import Dojo from "../../images/dojo.svg";
import { BsTwitter } from "react-icons/bs";
import { FaMediumM, FaTelegramPlane, FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import JapensePatterns from "../../images/japense-patterns.svg";
const Footer = () => {
    const socialNetwork = [
        {
            name: "Twitter",
            icon: <BsTwitter className="text-4xl" />,
            link: "https://twitter.com/shumoofficial",
        },
        {
            name: "Telegram",
            icon: <FaTelegramPlane className="text-4xl" />,
            link: "https://t.me/shumoofficial",
        },
        {
            name: "Instagram",
            icon: <RiInstagramFill className="text-4xl" />,
            link: "https://www.instagram.com/shumoofficial/",
        },
        {
            name: "Medium",
            icon: <FaMediumM className="text-4xl" />,
            link: "https://medium.com/@Shumoofficial",
        },
        {
            name: "TikTok",
            icon: <FaTiktok className="text-4xl" />,
            link: "https://www.tiktok.com/@shumoofficial",
        },
    ];

    const listenOnItems = [
        {
            name: "CoinmarketCap",
            icon: CoinMarketIcon,
            link: "https://coinmarketcap.com/de/currencies/shumo/",
        },
        {
            name: "Coingecko",
            icon: CoingeckoIcon,
            link: "https://www.coingecko.com/en/coins/shumo",
        },
        {
            name: "Uniswap",
            icon: UniswapIcon,
            link: "https://app.uniswap.org/#/swap?outputCurrency=0xeaa2c985abf14ac850f6614faebd6e4436bea65f&chain=mainnet&inputCurrency=ETH",
        },
        {
            name: "Dextool",
            icon: DextoolIcon,
            link: "https://www.dextools.io/app/ether/pair-explorer/0x8853c80490337b0c742c0d2da9be2275f82a598c",
        },
        {
            name: "Certik",
            icon: CertikIcon,
            link: "https://www.certik.com/projects/shumo-official",
        },
        {
            name: "KyCastle",
            icon: KyCastleIcon,
            link: "https://app.airnfts.com/nft/SHUMOIO_1644341354088",
        },
    ];
    return (
        <footer id="community" className=" mt-20">
            <div className=" max-w-screen-xl mx-auto flex md:flex-row flex-col items-center justify-between gap-10 px-10">
                <div className="basis-1/3 md:pb-0 pb-10">
                    <h2 className="text-center font-bold text-4xl text-shumo-softBrown mb-10">
                        SHUMO IS LISTED ON
                    </h2>
                    <div className="grid grid-flow-col grid-cols-3 grid-rows-2 place-content-center place-items-center gap-5">
                        {listenOnItems.map((item, index) => (
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={index}
                                className="flex items-center justify-center"
                            >
                                <img src={item.icon} alt={item.name} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="basis-1/2 flex flex-col items-center justify-center md:pb-0 pb-36">
                    <img src={Dojo} alt="Dojo" className="mb-5" />
                    <h2 className="text-center font-bold text-4xl text-shumo-softBrown mb-10">
                        JOIN THE SHUMO DOJO TODAY
                    </h2>
                    <p className="text-shumo-softBrown text-center font-bold leading-relaxed tracking-wide">
                        Our community is growing stronger by the day. Follow us
                        on social to get the most up-to-date, and accurate Shumo
                        information. We invite you to join our Telegram group to
                        get to know the team and hang out with thousands of
                        other members of the Shumo Army.
                    </p>
                    <div>
                        <ul className="flex items-center space-x-10 my-5 text-shumo-softBrown">
                            {socialNetwork.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div
                    style={{
                        background: `url(${JapensePatterns}) no-repeat`,
                        height: "270px",
                        width: "100%",
                        backgroundSize: "cover",
                    }}
                    className="flex  justify-center mt-5"
                >
                    <div className="bg-gradient-to-b from-[#F1755E] to-[#ED5135]  w-full self-end">
                        <p className="max-w-screen-xl mx-auto py-5 text-shumo-softRed font-semibold px-10">
                            The Content shared on this website is for
                            information purpose only and, thus, should not be
                            considered as financial advice. Trading/Investing is
                            risky and you should never invest more than you can
                            afford to lose. Cryptocurrencies are risky. Never
                            invest more than you can afford to lose. You alone
                            assume the sole responsibility of evaluating the
                            merits and risks associated with the use of any
                            information or other Content on the Site before
                            making any decisions based on such information or
                            other Content. Shumo also does not promise financial
                            gain, its purpose is to invest in other assets in
                            order to accrue income to continue furthering the
                            project and rewarding its users through other means
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
