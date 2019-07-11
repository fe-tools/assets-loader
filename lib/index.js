"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var random_1 = require("./random");
var events_1 = require("events");
var asset_type_1 = require("./asset-type");
var image_loader_1 = require("./loaders/image-loader");
var unknow_loader_1 = require("./loaders/unknow-loader");
var asstesLoader = function (assets, options) {
    if (assets === void 0) { assets = []; }
    if (options === void 0) { options = {}; }
    var index = 0;
    var random = 0;
    var bundler = [];
    var emitter = new events_1.default();
    var delay = options.delay;
    // tslint:disable-next-line
    var effect = options.effect || function () { };
    if (Array.isArray(delay)) {
        random = random_1.getRandomNum(delay[0], delay[1]);
    }
    var assetsLength = assets.length;
    var bundlerLength = assetsLength + random;
    emitter.on('load', function () {
        var percent = ((index + 1) / bundlerLength) * 100;
        index++;
        effect(percent);
    });
    bundler.push.apply(bundler, assets.map(function (url) {
        switch (asset_type_1.matchType(url)) {
            case 'image':
                return image_loader_1.default(url, { success: function () { return emitter.emit('load'); } });
            case 'unknow':
                return unknow_loader_1.default(url, { success: function () {
                        console.warn("Assets Loader: unknow asset type " + url);
                        emitter.emit('load');
                    } });
        }
    }));
    bundler.push.apply(bundler, random_1.getRandomTime(random, {
        done: function () { return emitter.emit('load'); }
    }));
    return bundler;
};
exports.default = asstesLoader;
