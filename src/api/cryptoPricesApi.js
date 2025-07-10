export async function fetchPrice(coin, coin2="USD") {
    
    // fetch price of coin from api endpoint.
    const url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${coin}&tsyms=${coin2}`
    const res = await fetch(url);
    const resJ = await res.json();
        
    return resJ;
}