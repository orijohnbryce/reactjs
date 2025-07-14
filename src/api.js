import axios from 'axios';

export async function fetchProducts() {
    const url = "http://localhost:3030/api/products/"
    const res = await axios(url);
    return res;
}

export async function addProduct(product) {
    const url = "http://localhost:3030/api/products/"
    await axios.post(url, product); 
}

export async function updateProduct(productId, product) {
    const url = `http://localhost:3030/api/products/${productId}`
    await axios.put(url, product);
}