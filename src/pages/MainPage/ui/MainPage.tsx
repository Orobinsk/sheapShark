import DealBigCard from 'entities/Deal/ui/DealCard/DealBigCard';
import React, { useEffect, useState } from 'react';
import { fetchLogo, getDeals } from 'shared/api';
import Carousel from "shared/ui/Carousel/Carousel";
import MainCarousel from 'widgets/MainCarousel/ui/MainCarousel';


const MainPage = () => {

    return (
        <div>
            <MainCarousel />
        </div>
    );
};

export default MainPage;
