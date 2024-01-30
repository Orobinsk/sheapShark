import axios from 'axios'
import {
  API_DEALS_URL,
  API_STEAM_IMG_URL,
} from 'shared/config/envConfig/envConfig'

export const apiDeals = axios.create({
  baseURL: API_DEALS_URL,
})
export const apiImg = axios.create({
  baseURL: API_STEAM_IMG_URL,
})
export const apiRAWG = axios.create({})
