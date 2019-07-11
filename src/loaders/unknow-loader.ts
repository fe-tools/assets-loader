import { Loader } from '../index.type'

const Unknow: Loader = (url, option = {}) => {
  return new Promise((resolve) => {
    option.success && option.success()
    resolve(`[unknow] ${url}`)
  })
}

export default Unknow