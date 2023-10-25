import React from "react";
import {MainPage} from "pages/MainPage";
import {ErrorPage} from "pages/ErrorPage";


enum AppRoute {
    MAIN = 'main',

    // last
    NOT_FOUND = 'not_found',
}

export const RoutePatch: Record<AppRoute, string> = {
    [AppRoute.MAIN]: '/',

    // последний
    [AppRoute.NOT_FOUND]: '*',
}



export const routeConfig = {
    [AppRoute.MAIN]: {
        path: RoutePatch.main,
        element: <MainPage/>,
    },

    // last
    [AppRoute.NOT_FOUND]: {
        path: RoutePatch.not_found,
        element: <ErrorPage/>,
    },
};
