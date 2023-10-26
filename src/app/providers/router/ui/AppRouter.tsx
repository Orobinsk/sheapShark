import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import {routeConfig} from "shared/config/routeConfig/routeConfig";
import {NavBar} from "widgets/NavBar";



const AppRouter = () => {
    return (
        <Suspense fallback={<h1>loading</h1>}>
            <NavBar/>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
            </Routes>
        </Suspense>

    );
};

export default AppRouter;
