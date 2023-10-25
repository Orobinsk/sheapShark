import React from 'react';
import { Route, Routes } from 'react-router-dom';
import testingElem from "widgets/testingElem";

const AppRouter = () => {
    return (
        <Routes>
            <Route
            key={123123}
            path={"/"}
            element={<h1 className="text-3xl font-bold underline">
                Привет мир!
            </h1>}
            />
        </Routes>
    );
};

export default AppRouter;