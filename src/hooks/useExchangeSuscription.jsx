import { get } from 'lodash';
import { useEffect, useRef } from 'react'
import { suscribeTic, unsubscribeTic } from '../services/wsGetTicService';

const apiKey = process.env.REACT_APP_CRYPTOWATCH_PUBLIC_KEY;

let wsClient = new WebSocket(`wss://stream.cryptowat.ch/connect?apikey=${apiKey}`);


const sendWS = (message, callback) => {
    waitForConnection(() => {
        wsClient.send(message);

        if (typeof callback !== 'undefined') {
            callback();// In case of callback is defined
        }
    });
};

const waitForConnection = (call, interval = 200) => {
    if (wsClient.readyState === 1) {
        call();
    } else {

        setTimeout(() => {
            waitForConnection(call, interval);
        }, interval);
    }
};

function useExchangeSuscription(exchange, processFeed) {

    const currentExchangeIdSuscription = useRef(null);

    useEffect(() => {
        wsClient.onopen = () => {
            console.log(`WebSocket Client Connected`);
        }

        wsClient.onclose = () => {
            console.log(`WebSocket Client Closed`);
        }

        wsClient.onerror = (error) => {
            console.log(`WebSocket Client Error:`);
            console.error(error)
        }


        wsClient.onmessage = (message) => {
            const fr = new FileReader();

            fr.onload = (e) => {
                const rawData = JSON.parse(e.target.result)

                const exchangeId = get(rawData, 'marketUpdate.market.exchangeId');
                const currencyPair = get(rawData, 'marketUpdate.market.currencyPairId');
                const price = Number(get(rawData, 'marketUpdate.tradesUpdate.trades.0.priceStr', 0)).toFixed(2);

                if (!exchangeId) {
                    console.log(rawData)
                }
                else {
                    processFeed({
                        exchangeId,
                        currencyPair,
                        price
                    })
                }
            };

            fr.readAsText(message.data);
        }
    }, [processFeed])

    useEffect(() => {

        if (currentExchangeIdSuscription.current !== exchange.id) {
            currentExchangeIdSuscription.current = exchange.id;// Geting sure it not connect to the same exchange twice

            sendWS(suscribeTic(exchange.id), () => {
                console.log(`Suscribed to exchange ${exchange.name}`)

            });
        }

        return (() => {

            if (wsClient.readyState === 1) {
                wsClient.send(unsubscribeTic(exchange.id))
                console.log(`Unsuscribed to exchange ${exchange.name}`)

            }
        })

    }, [exchange]);

    const closeConnection = () => {

        wsClient.close();
    }


    return { closeConnection };
}

export default useExchangeSuscription