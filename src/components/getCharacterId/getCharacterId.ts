
export const getCharacterId=(url:string)=> {
    return url.split('/')[url.split('/').length - 2]
  }