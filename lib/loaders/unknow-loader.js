"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Unknow = function (url, option) {
    if (option === void 0) { option = {}; }
    return new Promise(function (resolve) {
        option.success && option.success();
        resolve("[unknow] " + url);
    });
};
exports.default = Unknow;
