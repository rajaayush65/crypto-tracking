import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:4000/api"
})

export const getCryptoCurrencies = () => api.get(`/cryptos`);
export const putLatestCryptoCurrencies = () => api.post(`/cryptos`);

const apis = {
    getCryptoCurrencies,
    putLatestCryptoCurrencies
}

export default apis;