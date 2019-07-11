type AssetType = 'image'

type MatchType = (url: string) => AssetType | 'unknow'

type AssetMap<K extends string> = {
  readonly [T in K]: string[]
}

const assetMap: AssetMap<AssetType> = {
  image: ['png', 'jpg', 'jpge', 'gif', 'svg', 'webp']
}

export const matchType: MatchType = url => {
  let type: AssetType | 'unknow' = 'unknow'

  const result = /^(https:|http:)?\/\/[\w+\.\/]+\.(\w+)$/.exec(url)
  
  if (result) {
    for (const key in assetMap) {
      if (assetMap[key as AssetType].includes(result[2].toLowerCase())) {
        type = key as AssetType
      }
    }
  }

  return type
}
