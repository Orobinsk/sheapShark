import React from 'react';
import {getDeals} from "shared/api/model/api";
import Carousel from "shared/ui/Carousel/Carousel";


const MainPage = () => {
    // getDeals({storeID:1})


    return (
        <div>
          <Carousel/>
        </div>
    );
};

export default MainPage;
