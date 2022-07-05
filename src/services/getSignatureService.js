import axios from "axios";
import hmacSHA256 from 'crypto-js/hmac-sha256';
const apiKey = process.env.REACT_APP_CEX_API_KEY;
const apiSecret = process.env.REACT_APP_CEX_API_SECRET;

function createSignature(timestamp, apiKey, apiSecret) {


    var hmac3 = hmacSHA256(timestamp + apiKey, apiSecret).toString();
    const hashed = hmac3.replace(/(.{48})/g, '$1\n');

    console.log({ timestamp, apiKey, apiSecret, hmac3, hashed });
    return hashed;
}
const createAuthRequest = () => {
    var timestamp = Math.floor(Date.now() / 1000);  // Note: javascript timestamp presented in miliseconds
    var args = {
        e: 'auth', auth: {
            key: apiKey,
            signature: createSignature(timestamp, apiKey, apiSecret), timestamp: timestamp
        }
    };
    var authMessage = JSON.stringify(args);

    console.log({ args });

    return authMessage;
}

export const getSignatureService = () => {
    return axios.post('https://cex.io/api/', createAuthRequest());
}