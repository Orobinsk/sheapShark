import { DealCard } from "entities/Deal";
import { useEffect, useState } from "react";
import { IDeal, getDeals } from "shared/api";
import { Carousel } from "shared/ui";


const MainCarousel = () => {
    const [deals, setDeals] = useState<IDeal[]>([])
    const slides = [];

    useEffect(() => {
        getDeals({AAA: 1, pageSize: 12 }).then(data => setDeals(data))
    }, [])

    for (let i = 0; i < deals.length; i += 4) {
        const slide = (
            <div className="grid grid-cols-4 gap-3" key={`slide-${i}`}>
                {deals.slice(i, i + 4).map((deal, index) => (
                    <div
                        key={`big-deal-${i + index}`}
                    >
                        <DealCard data={deal} />
                    </div>
                ))}
            </div>
        );
        slides.push(slide);
    }
    return (
        <div className="w-5/6 m-auto font-semibold">
            <h1 className="text-primary-text text-3xl m-7">Специальные предложения</h1>
            <Carousel slides={slides} />
        </div>
    )
}

export default MainCarousel