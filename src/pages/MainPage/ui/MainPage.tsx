import React from 'react';
import TestingElem from "widgets/TestingElem";
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            main page
            <TestingElem/>
            <Link to={'/321'} >321123321</Link>
        </div>
    );
};

export default MainPage;
