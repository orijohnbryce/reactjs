import axios from "axios";

export async function fetchProducts() {
    const url = "http://localhost:3030/api/products/"
    const res = await axios(url);
    return res.data;
}

export async function fetchSingleProduct(id) {
    const url = "http://localhost:3030/api/products/" + id
    const res = await axios(url);
    return res.data;
}

