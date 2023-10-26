import {API_URL} from "shared/config/envConfig/envConfig";
import {apiInstance} from "shared/api/model/base";
import {AxiosPromise} from "axios";
import {Deal} from "shared/api/model/types";

export type GetDealsParams = {
    storeID?: number;
    pageNumber?: number;
    pageSize?:number;
    sortBy?:string;
    desc?:boolean
    lowerPrice?:number;
    upperPrice?:number;
    metacritic?:number;
    maxAge?:number;
    steamAppID?:string;
    title?:string;
    exact?:boolean;
    AAA?:boolean;
    steamworks?:boolean;
    onSale?:boolean;
    output?:string;
    id?:string;
};


export async function getDeals(params?:GetDealsParams):AxiosPromise<Deal[]> {
    try {
        const response = await apiInstance.get(API_URL+'deals',{params})
        return(response);
    } catch (error) {
        console.error(error);
    }
}
