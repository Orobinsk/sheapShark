import axios from "axios";
import {API_URL} from "shared/config/envConfig/envConfig";

export const apiInstance = axios.create({
    baseURL:API_URL
})
