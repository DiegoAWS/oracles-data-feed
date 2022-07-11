


const getSuscriptionText = (exchangeId) => ({
    subscriptions: [
        {
            streamSubscription: {
                resource: `exchanges:${exchangeId}:trades`
            }
        }]

})

export const suscribeTic = (exchangeId) => JSON.stringify({
    subscribe: getSuscriptionText(exchangeId)
})

export const unsubscribeTic = (exchangeId) => JSON.stringify({
    unsubscribe: getSuscriptionText(exchangeId)
})