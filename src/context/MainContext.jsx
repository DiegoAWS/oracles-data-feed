import React, { createContext, useContext, useEffect } from 'react';
import { w3cwebsocket } from 'websocket';

const MainContext = createContext();
const wsClient = new w3cwebsocket('wss://ws.cex.io/ws/', 'echo-protocol','wss.cex.io');



function MainContextProvider({ ...props }) {



    useEffect(() => {
        wsClient.onopen = () => {
            console.log('WebSocket Client Connected');

            wsClient.send(JSON.stringify({
                e: "init-ohlcv",
                i: "1m",
                rooms: [
                    "pair-BTC-USD"
                ]
            }));
        };

        wsClient.onmessage = (message) => {
            console.log(message);
        };



    }, []);




    return (
        <MainContext.Provider
            value={{

            }}
            {...props}
        />
    );
}

function useMainContext() {


    return useContext(MainContext);
}

export { MainContextProvider, useMainContext };