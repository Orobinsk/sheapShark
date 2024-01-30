import {
  API_DEALS_URL,
  API_RAWG_URL,
  API_STEAM_IMG_URL,
} from 'shared/config/envConfig/envConfig'
import { apiDeals, apiImg, apiRAWG } from 'shared/api/model/base'
import { AxiosPromise, AxiosResponse } from 'axios'
import { IDeal, IGetDealsParams } from 'shared/types/types'

export async function getDeals(
  params?: IGetDealsParams
): AxiosPromise<IDeal[]> {
  try {
    const response = await apiDeals.get(API_DEALS_URL + 'deals', { params })
    return response.data
  } catch (error) {
    console.error(error)
    return Promise.reject(error)
  }
}

export async function getRAWGSearchData(
  title: string
): Promise<{ data: any; status: number }> {
  try {
    const response: AxiosResponse = await apiRAWG.get(
      `${API_RAWG_URL}search?search=${title}&key=${
        import.meta.env['VITE_KEY_RAWG']
      }`
    )
    return { data: response.data, status: response.status }
  } catch (error) {
    if (error.response) {
      return { data: null, status: error.response.status }
    } else {
      // Если нет response, значит запрос не дошел до сервера
      return { data: null, status: 500 } // Internal Server Error
    }
  }
}

export async function fetchLogo(
  steamAppId: string,
  size?: string
): AxiosPromise {
  let typeLogo
  switch (size) {
    case 's':
      typeLogo = 'header.jpg'
      break
    case 'l':
      typeLogo = 'hero_capsule.jpg'
      break
    default:
      typeLogo = 'capsule_616x353.jpg'
      break
  }
  try {
    const response = await apiImg.get(
      API_STEAM_IMG_URL + steamAppId + '/' + typeLogo
    )
    return response
  } catch (error) {
    console.error(error)

    return Promise.reject(error)
  }
}
