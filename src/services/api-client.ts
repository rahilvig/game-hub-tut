import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4097f734fa474117afb8cfded528c6bc'
    }
})