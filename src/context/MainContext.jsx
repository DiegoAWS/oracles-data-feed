import React, { createContext, useCallback, useContext, useState } from 'react';
import exchangeList from '../data/exchanges_actives.json'
import useExchangeSuscription from '../hooks/useExchangeSuscription';
import useGetPrices from '../hooks/useGetPrices';

const MainContext = createContext();

function MainContextProvider({ ...props }) {

    const [exchange, setExchange] = useState(exchangeList[0])
    const [prices, setPrices] = useState({})

    const obtainPrices = useCallback((data) => {
        setPrices(data)
    }, [])


    useGetPrices(exchange, obtainPrices)


    const processFeed = useCallback((data) => {

        if (prices.hasOwnProperty(data?.currencyPair)) {

            setPrices((old) => ({
                ...old,
                [data?.currencyPair]: {
                    ...old[data?.currencyPair],
                    price: data?.price,
                }
            }))

        }

    }, [prices])

    const { closeConnection } = useExchangeSuscription(exchange, processFeed)
    // const { closeConnection } ={closeConnection:()=>{}}

    return (
        <MainContext.Provider
            value={{
                exchangeList,
                exchange,
                prices,
                setExchange,
                closeConnection,
            }}
            {...props}
        />
    );
}

function useMainContext() {


    return useContext(MainContext);
}

export { MainContextProvider, useMainContext };