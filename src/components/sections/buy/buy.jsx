import React from "react";
import MetamaskIcon from "../../../images/buy/buy-meta-icon.svg";
import ETHIcon from "../../../images/buy/buy-eth-icon.svg";
import UniswapIcon from "../../../images/buy/buy-uni-icon.svg";
import ShumoIcon from "../../../images/buy/buy-shumo-icon.svg";
const Buy = () => {
    const buyItems = [
        {
            id: 1,
            title: "CREATE METAMASK WALLET",
            description:
                "Create a MetaMask Wallet using either a desktop computer or an iOS/Android mobile device.",
            icon: MetamaskIcon,
        },
        {
            id: 2,
            title: "SEND ETH TO YOUR WALLET",
            description:
                "You can buy Ethereum (ETH) directly on MetaMask or transfer it to your MetaMask Wallet from exchanges like Bitmart, Ethereum, etc",
            icon: ETHIcon,
        },
        {
            id: 3,
            title: "CONNECT YOUR WALLET TO UNISWAP",
            description:
                "Connect your wallet to UniSwap by clicking ‘Connect wallet’ and selecting MetaMask",
            icon: UniswapIcon,
        },
        {
            id: 4,
            title: "SWAP ETH FOR SHUMO",
            description:
                "You can start swapping as soon as you have ETH available! Press ‘Select a token’ and enter the token address or search for it on the tokens list.",
            icon: ShumoIcon,
        },
    ];

    return (
        <section
            id="buy"
            className="max-w-screen-xl mx-auto flex flex-col  my-10 px-5"
        >
            <h2 className="text-center font-bold text-4xl text-shumo-softBrown ">
                HOW TO BUY
            </h2>
            <div className="list-buy mb-10 mt-20">
                {buyItems.map((item, index) => (
                    <div key={index} className="flex flex-col items-center ">
                        <div>
                            <img
                                src={item.icon}
                                alt={item.title}
                                className={`${item.id !== 1 ? "pr-5" : "pl-5"}`}
                            />
                        </div>
                        <div>
                            <h4 className="text-center font-bold text-shumo-red text-xl my-5">
                                {item.title}
                            </h4>
                            <p className="text-center text-shumo-softBrown font-semibold">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Buy;
