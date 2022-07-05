const getPairsTable = async () => {
    const apiKey = process.env.REACT_APP_CRYPTOWATCH_PUBLIC_KEY;

    const response = await fetch (`https://api.cryptowat.ch/pairs?apikey=${apiKey}`)
    const data = await response.json()
    return data
    }

exports.handler = async function(event, context) {
    const pairsTable = await getPairsTable()
    return {
        statusCode: 200,
        body: JSON.stringify(pairsTable),
      };
    
}