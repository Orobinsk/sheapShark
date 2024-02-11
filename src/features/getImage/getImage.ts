import { getRAWGSearchData } from 'shared/api/model/api'

export const getRAWGImg = async (title: string, thumb: string) => {
  //ОТКЛЮЧИЛ НА ВРЕМЯ РАЗРАБОТКИ
  //   const { data, status } = await getRAWGSearchData(title)
  //   if (status === 200) {
  //     return data.results[0].background_image
  //   }
  return thumb
}

function checkImage(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = function () {
      resolve(true)
    }
    img.onerror = function () {
      resolve(false)
    }
    img.src = url
  })
}

export const getImage = async (
  steamAppID: string,
  title: string,
  thumb: string
) => {
  const [capsuleExists, headerExists, akamaiHeaderExist] = await Promise.all([
    checkImage(
      `https://cdn.cloudflare.steamstatic.com/steam/apps/${steamAppID}/capsule_616x353.jpg`
    ),
    checkImage(
      `https://cdn.cloudflare.steamstatic.com/steam/apps/${steamAppID}/header_586x192.jpg`
    ),
    checkImage(
      `https://cdn.akamai.steamstatic.com/steam/subs/${steamAppID}/header_586x192.jpg`
    ),
  ])

  if (capsuleExists) {
    return `https://cdn.cloudflare.steamstatic.com/steam/apps/${steamAppID}/capsule_616x353.jpg`
  } else if (headerExists) {
    return `https://cdn.cloudflare.steamstatic.com/steam/apps/${steamAppID}/header_586x192.jpg`
  } else if (akamaiHeaderExist) {
    return `https://cdn.akamai.steamstatic.com/steam/subs/${steamAppID}/header_586x192.jpg`
  } else {
    return getRAWGImg(title.replace(/\s*-\s*/g, '-').toLowerCase(), thumb)
  }
}
