 const getEnvVar = (key: string) => {
    if (import.meta.env[key] === undefined) {
        return "https://www.cheapshark.com/api/1.0/"
    }
    return import.meta.env[key];
};

/* API entrypoint */
export const API_URL = getEnvVar("VITE_BASE_URL");
