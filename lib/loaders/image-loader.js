"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Loader = function (url, option) {
    if (option === void 0) { option = {}; }
    return new Promise(function (resolve) {
        var asset = new Image();
        asset.onload = function () {
            option.success && option.success();
            resolve("[image] " + url);
        };
        asset.onerror = function (error) {
            option.error && option.error(error);
        };
        asset.src = url;
    });
};
exports.default = Loader;
