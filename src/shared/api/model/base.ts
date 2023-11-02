import axios from "axios";
import { API_DEALS_URL, API_IMG_URL } from "shared/config/envConfig/envConfig";

export const apiDeals = axios.create({
    baseURL: API_DEALS_URL
})
export const apiImg = axios.create({
    baseURL: API_IMG_URL
})
