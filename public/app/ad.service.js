"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var adArray_1 = require('./adArray'); //ad array imported
var AdService = (function () {
    function AdService() {
    }
    AdService.prototype.getAds = function () {
        return Promise.resolve(adArray_1.ad);
    };
    AdService = __decorate([
        //ad array imported
        core_1.Injectable()
    ], AdService);
    return AdService;
}());
exports.AdService = AdService;
