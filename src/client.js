export const getBitcoinPrice = async () => {
    const res = await fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD");
    const resJ = await res.json();

    return resJ.BTC.USD;
}


//// for manual test from terminal: "node ./client.js"
// getBitcoinPrice().then((res) => {
//     console.log(res);
// })