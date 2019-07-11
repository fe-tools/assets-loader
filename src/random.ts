type RandomNum = (min: number, max: number) => number
type RandomTime = (
  count: number,
  options: {
    shake?: number,
    done?: () => void
  }
) => Promise<any>[]

/**
 * 获取范围内的随机整数
 * 
 * @param min 随机数下限
 * @param max 随机数上限
 */
export const getRandomNum: RandomNum = (min, max) => {
  const range = max - min
  const rand = Math.random()
  return (min + Math.round(rand * range))
}

/**
 * 获取随机时间
 * 
 * @param count 迭代次数
 * @param options 配置
 */
export const getRandomTime: RandomTime = (count = 0, options = {}) => {
  let timer = []
  const arr = new Array(count).fill('delay')

  timer = arr.map((item, index) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        options.done && options.done()
        resolve(`[delay] ${index+1}`)
      }, Math.random()*1000);
    })
  })

  return timer
}
