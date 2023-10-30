import {API_URL} from "shared/config/envConfig/envConfig";
import {apiInstance} from "shared/api/model/base";
import {AxiosPromise} from "axios";
import {IDeal, IGetDealsParams} from "shared/api/model/types";


export async function getDeals(params?:IGetDealsParams):AxiosPromise<IDeal[]> {
    try {
        const response = await apiInstance.get(API_URL+'deals',{params})
        return(response);
    } catch (error) {
        console.error(error);

        return Promise.reject(error);
    }
}
