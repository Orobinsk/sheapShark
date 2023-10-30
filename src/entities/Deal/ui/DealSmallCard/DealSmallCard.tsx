import { FC, useState } from "react"
import { IDeal } from "shared/api"
import SalesTag from 'shared/assets/icons/sales-tag.svg'

interface DealType {
    data: IDeal
}

const DealSmallCard: FC<DealType> = ({ data }) => {
    const [active, setActive] = useState(false)
    const { title, releaseDate, steamAppID, salePrice, normalPrice, savings, storeID, thumb } = data

    return (
        <div onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} className="rounded-2xl w-64 max-h-48 border border-secondary-text overflow-hidden cursor-pointer">
            <div className="overflow-hidden max-h-28">
                <img src="https://cdn.cloudflare.steamstatic.com/steam/subs/672746/header_ratio.jpg?t=1674765945" className={active ? "brightness-75" : ''} />
            </div>
            <div className="p-4">
                <div className="grid gap-2 grid-flow-col justify-start">
                    <p className="text-primary-text font-bold">${salePrice}</p>
                    <p className="text-secondary-text line-through text-xs">${normalPrice}</p>
                    <div className="flex">
                        <img src={SalesTag} className="h-4" />
                        <div className="bg-primary text-white rounded-r-sm text-xs h-4 px-1">-{Math.round(Number(savings))}%</div></div>
                </div>
                <div className="grid gap-2 grid-flow-col justify-start">
                    <div className="bg-primary w-0.5 h-4"></div>
                    {/* <img  /> */}
                    <p className="text-secondary-text leading-none">Steam</p>
                </div>

            </div>

        </div>
    )
}

export default DealSmallCard