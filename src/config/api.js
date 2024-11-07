import axios from "axios"

const api = axios.create({
    baseURL: 'http://172.16.3.228:8080',
    headers: {
        Accept: 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
})

export default api;