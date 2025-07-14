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

export async function register(firstName, lastName, email, password) {
    const url = "http://localhost:3030/api/register/"
    const data = {
        firstName,
        lastName,
        email,
        password
    }

    try {        
        const res = await axios.post(url, data);
        console.log(res);
    } catch (error) {
        console.log(error);        
    }
}

export async function login(email, password) {
    const url = "http://localhost:3030/api/login/"
    try {
        
        const data = {email, password}
        const res = await axios.post(url, data);
        const token = res.data;
        return token;

    } catch (error) {
        console.log(error);        
    }
}

// register('david11',"cohen11", "david00542555@gmail.com", "1234")
login("bart@gmail.com", "123456")