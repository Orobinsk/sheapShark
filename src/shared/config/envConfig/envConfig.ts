const getEnvVar = (key: string) => {
  if (import.meta.env[key] === undefined) {
    switch (key) {
      case 'VITE_CHEAPSHARK_URL':
        return 'https://www.cheapshark.com/api/1.0/'
      case 'VITE_STEAM_IMG_URL':
        return 'https://cdn.cloudflare.steamstatic.com/steam/apps/'
      case 'VITE_RAWG_URL':
        return 'https://api.rawg.io/api/'
    }
  }
  return import.meta.env[key]
}

/* API entrypoint */
export const API_DEALS_URL = getEnvVar('VITE_CHEAPSHARK_URL')
export const API_STEAM_IMG_URL = getEnvVar('VITE_STEAM_IMG_URL')
export const API_RAWG_URL = getEnvVar('VITE_RAWG_URL')
