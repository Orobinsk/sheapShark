const getEnvVar = (key: string) => {
    if (import.meta.env[key] === undefined) {
        switch (key) {
            case 'VITE_BASE_URL': return "https://www.cheapshark.com/api/1.0/"
            case 'VITE_IMG_URL': return "https://cdn.cloudflare.steamstatic.com/steam/apps/"
        }
    }
    return import.meta.env[key];
};

/* API entrypoint */
export const API_DEALS_URL = getEnvVar("VITE_BASE_URL");
export const API_IMG_URL = getEnvVar("VITE_IMG_URL");
