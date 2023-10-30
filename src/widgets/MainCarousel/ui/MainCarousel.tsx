import { DealBigCard, DealSmallCard } from "entities/Deal";
import { Sizes } from "shared/types/types";
import Carousel from "shared/ui/Carousel/Carousel"

const MainCarousel = () => {
    const mockDeal = {
        internalName: "DEUSEXHUMANREVOLUTIONDIRECTORSCUT",
        title: "Deus Ex: Human Revolution - Director's Cut",
        metacriticLink: "/game/pc/deus-ex-human-revolution---directors-cut",
        dealID: "HhzMJAgQYGZ%2B%2BFPpBG%2BRFcuUQZJO3KXvlnyYYGwGUfU%3D",
        storeID: "1",
        gameID: "102249",
        salePrice: "2.99",
        normalPrice: "19.99",
        isOnSale: "1",
        savings: "85.042521",
        metacriticScore: "91",
        steamRatingText: "Very Positive",
        steamRatingPercent: "92",
        steamRatingCount: "17993",
        steamAppID: "238010",
        releaseDate: 1382400000,
        lastChange: 1621536418,
        dealRating: "9.6",
        thumb: "https://cdn.cloudflare.steamstatic.com/steam/apps/238010/capsule_sm_120.jpg?t=1619788192"
    };

    const slides = [
        <div className="grid grid-rows-2 grid-cols-3 gap-3">
            <div className="row-span-2">
                <DealBigCard data={mockDeal} />
            </div>

            <div className="row-span-2">
                <DealBigCard data={mockDeal} />
            </div>
            <div><DealSmallCard data={mockDeal} /></div>
            <div><DealSmallCard data={mockDeal} /></div>
        </div>
        ,
        <div className="h-80 w-80 bg-secondary">2</div>,
        <div className="h-80 w-80 bg-secondary-text">3</div>
    ]
    return (
        <Carousel slides={slides} />
    )
}

export default MainCarousel