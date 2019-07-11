import { Bundler } from './index.type'
import { getRandomNum, getRandomTime } from './random'

import EventEmitter from 'events'

import { matchType } from './asset-type'

import imageLoader from './loaders/image-loader'
import unknowLoader from './loaders/unknow-loader'

const asstesLoader: Bundler = (assets = [], options = {}) => {
  let index: number = 0
  let random: number = 0
  let bundler = []
  const emitter = new EventEmitter()

  const delay = options.delay
  // tslint:disable-next-line
  const effect = options.effect || function() {}

  if (Array.isArray(delay)) {
    random = getRandomNum(delay[0], delay[1])
  }

  const assetsLength = assets.length
  const bundlerLength = assetsLength + random

  emitter.on('load', () => {
    const percent = ((index+1) / bundlerLength) * 100
    index++
    effect(percent)
  })

  bundler.push(...assets.map(
    url => {
      switch (matchType(url)) {
        case 'image':
          return imageLoader(url, { success: () => emitter.emit('load') })
        case 'unknow':
          return unknowLoader(url, { success: () => {
            console.warn(`Assets Loader: unknow asset type ${url}`)
            emitter.emit('load')
          }})
      }
    }
  ))

  bundler.push(...getRandomTime(random, {
    done: () => emitter.emit('load')
  }))

  return bundler
}

export default asstesLoader