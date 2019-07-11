import { Loader } from '../index.type'

const Loader: Loader = (url, option = {}) => {
  return new Promise((resolve) => {
    const asset = new Image()

    asset.onload = () => {
      option.success && option.success()
      resolve(`[image] ${url}`)
    }

    asset.onerror = (error) => {
      option.error && option.error(error)
    }

    asset.src = url
  })
}

export default Loader