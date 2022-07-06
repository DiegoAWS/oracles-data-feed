const axios = require('axios');

exports.handler = async function (event, context) {

    const url = event?.headers && event?.headers['x-url']
    if (!url) {
        return {
            statusCode: 400,
            headers: {
                "Access-Control-Allow-Origin": "*", // Allow from anywhere 
            },
            body: JSON.stringify({
                error: `No url provided, Headers['x-url'] is missing`
            })
        }
    }
    return axios.get(url)
        .then(response => {
            return {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*", // Allow from anywhere 
                },
                body: JSON.stringify({
                    data: response.data,
                 
                })
            }
        }).catch(error => {
            console.log(error)
            return {
                statusCode: 422,  
                headers: {
                    "Access-Control-Allow-Origin": "*", // Allow from anywhere 
                },
                body: `Error: ${error}`,
            }
        })

}