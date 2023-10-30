export interface IDeal {
    dealID: string
    dealRating: string
    gameID: string
    internalName: string
    isOnSale: string
    lastChange: number
    metacriticLink: string
    metacriticScore: string
    normalPrice: string
    releaseDate: number
    salePrice: string
    savings: string
    steamAppID: string
    steamRatingCount: string
    steamRatingPercent: string
    steamRatingText: string
    storeID: string
    thumb: string
    title: string
}

export interface IGetDealsParams {
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
}
