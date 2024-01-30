import { FC, memo, useEffect, useState } from "react"
import { IDeal } from "shared/api"
import { getRAWGSearchData } from "shared/api/model/api"
import SalesTag from 'shared/assets/icons/sales-tag.svg'
import { converDate } from "shared/lib/convertDate/convertDate"


interface DealType {
    data: IDeal
}

const DealBigCard: FC<DealType> = ({ data }) => {
    const [active, setActive] = useState(false)
    const { title, releaseDate, steamAppID, salePrice, normalPrice, savings, storeID, thumb } = data
    const date = converDate(releaseDate)
    const [imageSrc, setImageSrc] = useState('');

    function checkImage(url: string): Promise<boolean> {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = function () {
                resolve(true);
            };
            img.onerror = function () {
                resolve(false);
            };
            img.src = url;
        });
    }

       const fetchRAWGImg = async(title:string) =>{
         try {
            const { data, status } = await getRAWGSearchData(title);
            if (status === 404) {
                setImageSrc(thumb);
            } else if (status === 200) {
              setImageSrc(data.results[0].background_image);
            } 
          } catch (error) {
            setImageSrc(thumb);
            console.log("Произошла ошибка:", error);
          }
      }
       
    
    useEffect(() => {
            //проверяем разные стим ссылки
        if (steamAppID) {
            Promise.all([
                checkImage(`https://cdn.cloudflare.steamstatic.com/steam/apps/${steamAppID}/capsule_616x353.jpg`),
                checkImage(`https://cdn.cloudflare.steamstatic.com/steam/apps/${steamAppID}/header_586x192.jpg`),
                checkImage(`https://cdn.akamai.steamstatic.com/steam/subs/${steamAppID}/header_586x192.jpg`) 
            ]).then(([capsuleExists, headerExists, akamaiHeaderExist]) => {
                if (capsuleExists){
                    setImageSrc(`https://cdn.cloudflare.steamstatic.com/steam/apps/${steamAppID}/capsule_616x353.jpg`)
                } else if (headerExists){
                    setImageSrc(`https://cdn.cloudflare.steamstatic.com/steam/apps/${steamAppID}/header_586x192.jpg`)
                } else if (akamaiHeaderExist){
                    setImageSrc(`https://cdn.akamai.steamstatic.com/steam/subs/${steamAppID}/header_586x192.jpg`)
                } else fetchRAWGImg(title.replace(/\s*-\s*/g, '-').toLowerCase());     
            });
        }
         else fetchRAWGImg(title.replace(/\s*-\s*/g, '-').toLowerCase());
    }, []);
    

    return (
        <div onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} className="rounded-2xl w-64 h-72 border border-secondary-text overflow-hidden cursor-pointer">
            <div className="max-h-56 overflow-hidden ">
                <img src={imageSrc} alt={title} className={(active ? "brightness-75" : '') + ' transition-all duration-300 ease-in-out m-auto  object-cover w-full h-28 '}
                 />
            </div>
            <div className="p-4 flex flex-col h-44">
                <p className={(active ? 'text-primary' : 'text-primary-text') + " font-bold transition-color duration-300 ease-in-out"}>{title}</p>
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
                        <p className="text-secondary-text leading-none">Steam</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DealBigCard