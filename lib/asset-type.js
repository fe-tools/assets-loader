"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assetMap = {
    image: ['png', 'jpg', 'jpge', 'gif', 'svg', 'webp']
};
exports.matchType = function (url) {
    var type = 'unknow';
    var result = /^(https:|http:)?\/\/[\w+\.\/]+\.(\w+)$/.exec(url);
    if (result) {
        for (var key in assetMap) {
            if (assetMap[key].includes(result[2].toLowerCase())) {
                type = key;
            }
        }
    }
    return type;
};
