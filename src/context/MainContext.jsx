import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { suscribeTic, unsubscribeTic } from '../services/wsGetTicService';



const MainContext = createContext();
const apiKey = process.env.REACT_APP_CRYPTOWATCH_PUBLIC_KEY;

const wsClient = new WebSocket(`wss://stream.cryptowat.ch/connect?apikey=${apiKey}`);

const PAIR_DEFAULT = 125; // ETC <-> USD

const sendWS = function (message, callback) {
    waitForConnection(function () {
        wsClient.send(message);
        if (typeof callback !== 'undefined') {
            callback();
        }
    });
};

const waitForConnection = function (callback, interval = 200) {
    if (wsClient.readyState === 1) {
        callback();
    } else {

        setTimeout(function () {
            waitForConnection(callback, interval);
        }, interval);
    }
};

const emptyDataSet = (new Array(20)).fill({ price: null })

function MainContextProvider({ ...props }) {

    const [dataSet, setDataSet] = useState(emptyDataSet)

    const lastTimeStamp = useRef({});


    const pushResultToDataSet = (newValue) => {

        setDataSet(oldDataSet => oldDataSet.slice(1).concat( newValue ))
    }


    useEffect(() => {

        wsClient.onopen = () => {
            console.log('WebSocket Client Connected')

            sendWS(suscribeTic(PAIR_DEFAULT));
        }


        wsClient.onmessage = (message) => {
            const fr = new FileReader();

            fr.onload = (e) => {
                const rawData = JSON.parse(e.target.result)

               
                const currencyPairId = rawData?.marketUpdate?.market?.currencyPairId
                const trades = rawData?.marketUpdate?.tradesUpdate?.trades || []
                trades.forEach(item => {


                    if (lastTimeStamp.current[currencyPairId] !== item?.timestamp) {

                        const amountQuoteStr = Number(item?.amountQuoteStr)
                        const amountStr = Number(item?.amountStr)
                        const price = Number(item?.priceStr)
                        const orderSide = item?.orderSide
                       
                        pushResultToDataSet({
                            orderSide,
                            currencyPairId,
                            amountQuoteStr,
                            amountStr,
                            price
                        })

                        lastTimeStamp.current[currencyPairId] = item.timestamp;
                    }
                })

            };

            fr.readAsText(message.data);
        }


        return (() => {
            if (wsClient.readyState === 1)
                turnOffSuscription()
        })

    }, []);


    const turnOffSuscription = () => {
        console.log("Disconnecting")
        wsClient.send(unsubscribeTic(PAIR_DEFAULT));
    }

    return (
        <MainContext.Provider
            value={{
                dataSet,
                turnOffSuscription,
            }}
            {...props}
        />
    );
}

function useMainContext() {


    return useContext(MainContext);
}

export { MainContextProvider, useMainContext };