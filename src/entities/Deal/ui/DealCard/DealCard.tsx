import { getImage, getRAWGImg } from "features"
import { FC, useEffect, useState } from "react"
import { IDeal } from "shared/api"
import SalesTag from 'shared/assets/icons/sales-tag.svg'
import { storesInfo } from "shared/constants/storesInfo"
import { converDate } from "shared/lib/convertDate/convertDate"
import classes from './DealCard.module.scss'
import classNames from "classnames"


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
        <div onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} className={classes.wrapper}>
            <div className={classes.img_wrap}>
                <img src={imageSrc} alt={''} className={classNames(classes.img, (active && classes.img_active))}
                 />
            </div>
            <div className={classes.card_body}>
                <p className={classNames(classes.title, (active && classes.title_active)) }>{title.length<70 ? title : `${title.slice(0,70)}...`}</p>
                <p className={classes.date_release}>{date}</p>
                <div className={classes.card_footer}>
                    <div className={classes.price_wrapper}>
                        <p className={classes.sale_price}>${salePrice}</p>
                        <p className={classes.normal_price}>${normalPrice}</p>
                        <div className={classes.sales_tag}>
                            <img src={SalesTag} className={classes.img_sales_tag} />
                            <div className={classes.sales_tag_savings}>-{Math.round(Number(savings))}%</div>
                        </div>
                    </div>
                    <div className={classes.store_wrapper}>
                        <div className={classes.store_line}/>
                        <p className={classes.store_title}>{storesInfo[Number(storeID)].storeName}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DealCard
