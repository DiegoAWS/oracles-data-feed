const axios = require('axios');

exports.handler = async function (event, context) {
    const apiKey = process.env.REACT_APP_CRYPTOWATCH_PUBLIC_KEY;

    return axios.get(`https://api.cryptowat.ch/pairs?apikey=${apiKey}`)
        .then(response => {
            return {
                statusCode: 200,
                body: JSON.stringify(response.data)
            }
        }).catch(error => {
            console.log(error)
            return {
                statusCode: 422,
                body: `Error: ${error}`,
            }
        })

}