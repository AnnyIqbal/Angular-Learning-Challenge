"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var Ads = (function () {
    function Ads(priceOfObject, imageOfObject) {
        this.price = priceOfObject;
        this.image = imageOfObject;
    }
    return Ads;
}());
exports.Ads = Ads;
var Mobiles = (function (_super) {
    __extends(Mobiles, _super);
    function Mobiles(modelOfMobile, companyOfMobile, colorOfMobile, screenSizeOfMobile, priceOfMobile, img) {
        _super.call(this, priceOfMobile, img);
        this.cName = "Mobiles";
        this.model = modelOfMobile;
        this.company = companyOfMobile;
        this.color = colorOfMobile;
        this.screenSize = screenSizeOfMobile;
        this.price = priceOfMobile;
        this.image = img;
    }
    return Mobiles;
}(Ads));
exports.Mobiles = Mobiles;
var DisplayMobile = (function () {
    function DisplayMobile() {
        this.ad = [
            { x: new Mobiles("J1-Ace", "Samsung", "white", 4.3, 19000, "app/Images/j1.jpg") },
            { x: new Mobiles("Noir S1", "Q-Mobile", "black", 5, 11000, "app/Images/S1.png") }
        ]; // objects are pushed dynamically whenever a user posts ad
    }
    DisplayMobile = __decorate([
        core_1.Component({
            selector: 'mobile',
            template: "<div class=\"panel panel-primary\">\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\"> {{this.ad[0].x.company }} {{this.ad[0].x.model}} </h3>\n                </div>\n                <div class=\"panel-body row\">\n                    <div class= \"col-sm-4\">\n                        <img src={{this.ad[0].x.image}} alt=\"car\" height=\"100\" width=\"100\" />\n                    </div>\n                    <div class=\"col-sm-8\">\n                        <strong> Model: </strong> {{this.ad[0].x.model}} <br />\n                        <strong> Company: </strong> {{this.ad[0].x.company }} <br />\n                        <strong> Color: </strong> {{this.ad[0].x.color}} <br />\n                        <strong> Screen Size: </strong> {{this.ad[0].x.screenSize}}\n                    </div>\n                </div>\n                <div class=\"panel-footer text-right\"> <strong>Price: Rs. {{this.ad[0].x.price}}/-</strong> </div>\n            </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], DisplayMobile);
    return DisplayMobile;
}());
exports.DisplayMobile = DisplayMobile;
//# sourceMappingURL=mobile.js.map