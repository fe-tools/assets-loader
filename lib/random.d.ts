declare type RandomNum = (min: number, max: number) => number;
declare type RandomTime = (count: number, options: {
    shake?: number;
    done?: () => void;
}) => Promise<any>[];
/**
 * 获取范围内的随机整数
 *
 * @param min 随机数下限
 * @param max 随机数上限
 */
export declare const getRandomNum: RandomNum;
/**
 * 获取随机时间
 *
 * @param count 迭代次数
 * @param options 配置
 */
export declare const getRandomTime: RandomTime;
export {};
