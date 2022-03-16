import React, { useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";
import {
    getTokenPrice1D,
    getTokenPrice1H,
    getTokenPrice1M,
    getTokenPrice7D,
} from "../../services/api/stats";
import { options } from "../../../helpers/statsOptions";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const StatsChart = () => {
    //State

    const initialState = {
        labels: [],
        datasets: [
            {
                tension: 0.5,
                data: [],
                fill: false,
                borderColor: "#ED5135",
                backgroundColor: "#ED5135",
            },
        ],
    };

    const [tokenData, setTokenData] = useState(initialState);
    const { data: tokenHour } = getTokenPrice1H();
    const { data: tokenDay } = getTokenPrice1D();
    const { data: tokenWeek } = getTokenPrice7D();
    const { data: tokenMonth } = getTokenPrice1M();

    //Token Data
    const token1h = {
        labels: tokenHour?.map(({ date }) => moment(date).format("LT")) || [],
        datasets: [
            {
                tension: 0.5,
                data: tokenHour?.map(({ price }) => price) || [],
                fill: false,
                borderColor: "#ED5135",
                backgroundColor: "#ED5135",
            },
        ],
    };

    const token1d = {
        labels: tokenDay?.map(({ date }) => moment(date).format("LT")) || [],
        datasets: [
            {
                tension: 0.5,
                data: tokenDay?.map(({ price }) => price) || [],
                fill: false,
                borderColor: "#ED5135",
                backgroundColor: "#ED5135",
            },
        ],
    };
    const token7d = {
        labels: tokenWeek?.map(({ date }) => moment(date).format("L")) || [],
        datasets: [
            {
                tension: 0.5,
                data: tokenWeek?.map(({ price }) => price) || [],
                fill: false,
                borderColor: "#ED5135",
                backgroundColor: "#ED5135",
            },
        ],
    };
    const token30d = {
        labels: tokenMonth?.map(({ date }) => moment(date).format("ll")) || [],
        datasets: [
            {
                tension: 0.5,
                data: tokenMonth?.map(({ price }) => price) || [],
                fill: false,
                borderColor: "#ED5135",
                backgroundColor: "#ED5135",
            },
        ],
    };

    return (
        <div className="my-10 bg-chart-light p-5 rounded-xl shadow-xl flex flex-col max-w-screen-xl mx-auto ">
            <div className="mb-5 border-2 rounded-lg inline-flex self-end divide-x-2 mx-5">
                <button
                    onClick={() => setTokenData(token1h)}
                    className="py-1 px-4 font-bold text-gray-50 focus:text-shumo-softBrown "
                >
                    HOUR
                </button>
                <button
                    onClick={() => setTokenData(token1d)}
                    className="py-1 px-4 font-bold text-gray-50 focus:text-shumo-softBrown "
                >
                    DAY
                </button>
                <button
                    onClick={() => setTokenData(token7d)}
                    className="py-1 px-4 font-bold text-gray-50 focus:text-shumo-softBrown "
                >
                    WEEK
                </button>
                <button
                    onClick={() => setTokenData(token30d)}
                    className="py-1 px-4 font-bold text-gray-50 focus:text-shumo-softBrown"
                >
                    MONTH
                </button>
            </div>

            {tokenData.labels.length === 0 ? (
                <Line data={token1h} options={options} height={100} />
            ) : (
                <Line data={tokenData} options={options} height={100} />
            )}
        </div>
    );
};

export default StatsChart;
