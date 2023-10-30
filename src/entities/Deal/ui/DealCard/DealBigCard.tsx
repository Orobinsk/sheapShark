import { FC, useState } from "react"
import { IDeal } from "shared/api"
import SalesTag from 'shared/assets/icons/sales-tag.svg'
import { converDate } from "shared/lib/convertDate/convertDate"


interface DealType {
    data: IDeal
}

const DealBigCard: FC<DealType> = ({ data }) => {
    const [active, setActive] = useState(false)
    const { title, releaseDate, steamAppID, salePrice, normalPrice, savings, storeID, thumb } = data
    const date = converDate(releaseDate)

    return (
        <div onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} className="rounded-2xl w-64 max-h-96 border border-secondary-text overflow-hidden cursor-pointer">
            <div className="max-h-56 overflow-hidden bg-primary-text">
                <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/238010/hero_capsule.jpg" className={(active ? "brightness-75" : '') + ' transition-all duration-300 ease-in-out'} />
            </div>
            <div className="p-4">
                <p className={(active ? 'text-primary' : 'text-primary-text') + " font-bold transition-color duration-300 ease-in-out"}>{title}</p>
                <p className="text-secondary-text text-xs">{date}</p>
                <div className="grid gap-2 grid-flow-col justify-start mt-3">
                    <p className="text-primary-text font-bold">${salePrice}</p>
                    <p className="text-secondary-text line-through text-xs">${normalPrice}</p>
                    <div className="flex">
                        <img src={SalesTag} className="h-4" />
                        <div className="bg-primary text-white rounded-r-sm text-xs h-4 px-1">-{Math.round(Number(savings))}%</div></div>
                </div>
                <div className="grid gap-2 grid-flow-col justify-start mt-2">
                    <div className="bg-primary w-0.5 h-4"></div>
                    {/* <img  /> */}
                    <p className="text-secondary-text leading-none">Steam</p>
                </div>
            </div>
        </div>
    )
}

export default DealBigCard