import { API_DEALS_URL, API_IMG_URL } from "shared/config/envConfig/envConfig";
import { apiDeals, apiImg } from "shared/api/model/base";
import { AxiosPromise } from "axios";
import { IDeal, IGetDealsParams } from "shared/types/types";


export async function getDeals(params?: IGetDealsParams): AxiosPromise<IDeal[]> {
    try {
        const response = await apiDeals.get(API_DEALS_URL + 'deals', { params })
        return (response.data);
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
}

export async function fetchLogo(steamAppId: string, size?: string): AxiosPromise {
    let typeLogo
    switch (size) {
        case 's': typeLogo = 'header.jpg';
            break;
        case 'l': typeLogo = 'hero_capsule.jpg';
            break;
        default: typeLogo = 'capsule_616x353.jpg';
            break;
    }
    try {
        const response = await apiImg.get(API_IMG_URL + steamAppId + '/' + typeLogo)
        return (response);
    } catch (error) {
        console.error(error);

        return Promise.reject(error);
    }
}
