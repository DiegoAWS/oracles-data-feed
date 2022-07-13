import { useEffect } from "react"
import { getRestPricesOneMarket } from "../services/getRestPrices"

function useGetPrices(exchange, obtainPrices) {

    useEffect(() => {
        if (exchange.symbol) {
            (async () => {
                const response = await getRestPricesOneMarket(exchange.symbol)
                const prices = response.data;
                obtainPrices(prices)
            })();
        }

    }, [exchange, obtainPrices])
    return null
}

export default useGetPrices