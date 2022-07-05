import axios from "axios";

export const getTicService = () => {
    return axios.get('https://cex.io/api/ticker/GHS/BTC');
}