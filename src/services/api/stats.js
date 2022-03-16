import useSWR from "swr";
import { fetcher } from "../../helpers/fetcher";
const URL = import.meta.env.VITE_REACT_APP_API_URL;

export const getTokenPrice1H = () => {
    const { data, error } = useSWR(`${URL}/token/price/1h`, fetcher);
    return { data, error };
};

export const getTokenPrice1D = () => {
    const { data, error } = useSWR(`${URL}/token/price/day`, fetcher);
    return { data, error };
};
export const getTokenPrice7D = () => {
    const { data, error } = useSWR(`${URL}/token/price/7d`, fetcher);
    return { data, error };
};
export const getTokenPrice1M = () => {
    const { data, error } = useSWR(`${URL}/token/price/month`, fetcher);
    return { data, error };
};
