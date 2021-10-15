import axios from 'axios';


const api = axios.create({
    baseURL: 'https://api.weatherapi.com/v1'
})

export default api;

export const key = 'a6d0238f0dd54ef1abd201952210810'