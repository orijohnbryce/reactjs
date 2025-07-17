import axios from "axios"
import { BASE_URL } from "../../app/apiConfig"

export async function register(formData) {
    // const url = "http://localhost:3030/api/register/";
    const url = BASE_URL + "register/"
    const res = await axios.post(url, formData)
    return res;
}


export async function login(formData) {
    const res = await axios.post(BASE_URL + "/login/", formData)    
    return res.data;
}

export async function isTokenValid(token) {
    const headers = {
        authorization: `bearer ${token}`
    }
    try {
        await axios(BASE_URL + "products/top-three", {headers: headers})
        return true;
    } catch (error) {
        return false;
    }
}