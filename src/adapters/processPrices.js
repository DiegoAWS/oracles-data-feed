import { groupBy, sortBy, uniqBy } from "lodash";

export const getPricesArray = (prices) => {
    const arrayOfPrices = Object.entries(prices);
    const arrayOfPricesArray = arrayOfPrices.map(([pairId, values]) => {

        return ({
            pairId,
            ...values
        })
    })

    const groupedArray = Object.values(groupBy(arrayOfPricesArray, "base"));

    const sortedData = sortBy(groupedArray, ["0.baseName"])

    return sortedData;
}

export const getPricesList = (prices) => {
    return sortBy(uniqBy(Object.values(prices).filter(item => item.quote === "usd" && item.price), "base"), ["base"]);
}
