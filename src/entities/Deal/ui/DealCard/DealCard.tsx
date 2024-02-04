import { getImage, getRAWGImg } from "features"
import { FC, useEffect, useState } from "react"
import { IDeal } from "shared/api"
import SalesTag from 'shared/assets/icons/sales-tag.svg'
import { storesInfo } from "shared/constants/storesInfo"
import { converDate } from "shared/lib/convertDate/convertDate"


interface DealType {
    data: IDeal
}

const DealCard: FC<DealType> = ({ data }) => {
    const [active, setActive] = useState(false)
    const { title, releaseDate, steamAppID, salePrice, normalPrice, savings, storeID, thumb } = data
    const date = converDate(releaseDate)
    const [imageSrc, setImageSrc] = useState('');
       

    useEffect(() => {
        const fetchImage = async () => {
          if (steamAppID) {
            const imageUrl = await getImage(steamAppID, title, thumb);
            setImageSrc(imageUrl);
          } 
          // DISABLED ON DEV
        //   else {
        //     const imageUrl = await getRAWGImg(title.replace(/\s*-\s*/g, '-').toLowerCase(), thumb)
        //     setImageSrc(imageUrl);
        //   }
        };
    
        fetchImage();
      }, []);

    return (
        <div onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} className="rounded-2xl w-64 h-72 border border-secondary-text overflow-hidden cursor-pointer">
            <div className="max-h-56 overflow-hidden ">
                <img src={imageSrc} alt={''} className={(active ? "brightness-75" : '') + ' transition-all duration-300 ease-in-out m-auto  object-cover w-full h-28 '}
                 />
            </div>
            <div className="p-4 flex flex-col h-44">
                <p className={(active ? 'text-primary' : 'text-primary-text') + " font-bold transition-color duration-300 ease-in-out"}>{title.length<70 ? title : `${title.slice(0,70)}...`}</p>
                <p className="text-secondary-text text-xs">{date}</p>
                <div className="mb-0 mt-auto">
                    <div className=" grid gap-2 grid-flow-col justify-start mt-3">
                        <p className="text-primary-text font-bold">${salePrice}</p>
                        <p className="text-secondary-text line-through text-xs">${normalPrice}</p>
                        <div className="flex">
                            <img src={SalesTag} className="h-4" />
                            <div className="bg-primary text-white rounded-r-sm text-xs h-4 px-1">-{Math.round(Number(savings))}%</div>
                        </div>
                    </div>
                    <div className="grid gap-2 grid-flow-col justify-start mt-2">
                        <div className="bg-primary w-0.5 h-4"></div>
                        <p className="text-secondary-text leading-none">{storesInfo[Number(storeID)].storeName}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DealCard