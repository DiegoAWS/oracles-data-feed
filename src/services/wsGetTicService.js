
export const suscribeTic = (pair) => JSON.stringify({
    "subscribe": {
        "subscriptions": [
            {
                "streamSubscription": {
                    "resource": `pairs:${pair}:trades`
                }
            },
        ]
    }
})

export const unsubscribeTic = (pair) => JSON.stringify({
    "unsubscribe": {
        "subscriptions": [
            {
                "streamSubscription": {
                    "resource": `pairs:${pair}:trades`
                }
            }

        ]
    }
})