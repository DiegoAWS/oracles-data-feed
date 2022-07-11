import React, { createContext, useCallback, useContext, useState } from 'react';


import exchangeList from '../data/exchanges_actives.json'
import useExchangeSuscription from '../hooks/useExchangeSuscription';
import useGetPrices from '../hooks/useGetPrices';

const MainContext = createContext();


function MainContextProvider({ ...props }) {

    const [exchange, setExchange] = useState(exchangeList[0])

    useGetPrices(exchange)

    const processFeed = useCallback((data) => {

        console.log(data)

    }, [])


    const { closeConnection } = { closeConnection: () => { } }//useExchangeSuscription(exchange, processFeed)

    return (
        <MainContext.Provider
            value={{
                exchangeList,
                exchange,
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