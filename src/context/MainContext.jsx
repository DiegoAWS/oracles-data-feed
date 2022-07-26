import React, { createContext, useCallback, useContext, useState } from 'react';
import exchangeList from '../data/exchanges_actives.json'
// import useExchangeSuscription from '../hooks/useExchangeSuscription';
import useGetPrices from '../hooks/useGetPrices';
import { darkTheme, lightTheme } from './colorShemes';

const defaultTheme = localStorage.getItem('themeColor') === 'dark' ? darkTheme : lightTheme

const MainContext = createContext();

function MainContextProvider({ ...props }) {

    const [exchange, setExchange] = useState(exchangeList[0])
    const [prices, setPrices] = useState({})



    const [theme, setTheme] = useState(defaultTheme)
    const [searchBarOpen, setSearchBarOpen] = useState(false)

    const toggleSearchBar = useCallback(() => {
        setSearchBarOpen(oldValue => !oldValue)
    }, [])


    console.log({ defaultTheme, isDarkMode: defaultTheme.isDarkMode })

    const toggleTheme = useCallback(() => {
        setTheme(oldValue => {

            const newValue = oldValue.isDarkMode ? 'light' : 'dark'

            console.log({ newValue })

            localStorage.setItem('themeColor', newValue)

            return oldValue.isDarkMode ? lightTheme : darkTheme
        })
    }, []);

    const obtainPrices = useCallback((data) => {
        setPrices(data)
    }, [])

    useGetPrices(exchange, obtainPrices)






    // const processFeed = useCallback((data) => {

    //     if (prices.hasOwnProperty(data?.currencyPair)) {

    //         setPrices((old) => ({
    //             ...old,
    //             [data?.currencyPair]: {
    //                 ...old[data?.currencyPair],
    //                 price: data?.price,
    //             }
    //         }))

    //     }

    // }, [prices])

    // const { closeConnection } = useExchangeSuscription(exchange, processFeed)
    const { closeConnection } = { closeConnection: () => { } }

    return (
        <MainContext.Provider
            value={{
                theme,
                toggleTheme,
                searchBarOpen,
                toggleSearchBar,
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