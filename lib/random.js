"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 获取范围内的随机整数
 *
 * @param min 随机数下限
 * @param max 随机数上限
 */
exports.getRandomNum = function (min, max) {
    var range = max - min;
    var rand = Math.random();
    return (min + Math.round(rand * range));
};
/**
 * 获取随机时间
 *
 * @param count 迭代次数
 * @param options 配置
 */
exports.getRandomTime = function (count, options) {
    if (count === void 0) { count = 0; }
    if (options === void 0) { options = {}; }
    var timer = [];
    var arr = new Array(count).fill('delay');
    timer = arr.map(function (item, index) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                options.done && options.done();
                resolve("[delay] " + (index + 1));
            }, Math.random() * 1000);
        });
    });
    return timer;
};
