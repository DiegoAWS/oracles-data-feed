import axios from "axios"

export const getRestPrices = () => {
    return axios.get('https://api.cryptowat.ch/markets/prices')
}