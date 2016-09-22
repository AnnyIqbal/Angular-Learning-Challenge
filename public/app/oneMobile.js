"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var OneMobile = (function () {
    function OneMobile() {
    }
    OneMobile = __decorate([
        core_1.Component({
            selector: 'oneMobile',
            template: "<div class=\"panel panel-primary\">\n                        <div class=\"panel-heading\">\n                            <h3 class=\"panel-title\"> {{this.myAd.x.company}} {{this.myAd.x.model}} </h3>\n                        </div>\n                        <div class=\"panel-body row\">\n                            <div class= \"col-sm-4\">\n                                <img src={{this.myAd.x.image}} alt=\"mobile\" height=\"100\" width=\"100\" />\n                            </div>\n                            <div class=\"col-sm-8\"> {{this.myAd.x.display()}} </div>\n                        </div>\n                        <div class=\"panel-footer text-right\"> <strong>Price: Rs.{{this.myAd.x.price}} /-</strong> </div>\n                    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], OneMobile);
    return OneMobile;
}());
exports.OneMobile = OneMobile;
//# sourceMappingURL=oneMobile.js.map