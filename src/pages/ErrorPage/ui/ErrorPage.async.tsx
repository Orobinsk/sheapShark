import {lazy} from "react";

export const ErrorPageAsync = lazy(() => new Promise((resolve) => {
    resolve(import('./ErrorPage'));
}));
