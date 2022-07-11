import { useEffect } from "react"
import { getRestPrices } from "../services/getRestPrices"


function useGetPrices(exchange) {

    console.log({ exchange })
    
    useEffect(() => {
        (async () => {
            const prices = await getRestPrices()
            console.log({prices})
        })();

    }, [])
    return null
}

export default useGetPrices