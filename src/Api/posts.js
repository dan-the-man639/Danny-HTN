import axios from "axios";

export default axios.create({
    baseURL: 'https://api.hackthenorth.com/v3'
});