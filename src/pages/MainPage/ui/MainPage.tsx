import DealBigCard from 'entities/Deal/ui/DealCard/DealBigCard';
import React from 'react';
import { getDeals } from "shared/api/model/api";
import Carousel from "shared/ui/Carousel/Carousel";
import MainCarousel from 'widgets/MainCarousel/ui/MainCarousel';


const MainPage = () => {
    // getDeals({storeID:1})

    return (
        <div>
            <MainCarousel />
        </div>
    );
};

export default MainPage;
