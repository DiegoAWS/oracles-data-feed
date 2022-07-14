
const uri = process.env.REACT_APP_BACKEND_SERVER_URI;

export const getCurrencyLogoUrl = (currency) => {

    return `${uri}/${currency.toUpperCase()}.png`;
}
