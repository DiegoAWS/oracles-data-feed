import axios from "axios"
const uri = process.env.REACT_APP_BACKEND_SERVER_URI;

export const getRestPrices = () => {
    return axios.get(`${uri}/prices`)
}

export const getRestPricesOneMarket = (market) => {
    return axios.get(`${uri}/prices/${market}`)
}