import axios from 'axios';

export async function fetchProducts() {
    
    const url = "http://localhost:3030/api/products/"
    const res = await axios(url);
    console.log(res);
    return res;
    // return list of products from BE
}