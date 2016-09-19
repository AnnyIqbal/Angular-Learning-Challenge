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
var core_1 = require('@angular/core');
var Ads = (function () {
    function Ads(priceOfObject, imageOfObject) {
        this.price = priceOfObject;
        this.image = imageOfObject;
    }
    return Ads;
}());
exports.Ads = Ads;
var Cars = (function (_super) {
    __extends(Cars, _super);
    function Cars(nameOfCar, companyOfCar, modelOfCar, engineOfCar, colorOfCar, priceOfCar, img) {
        _super.call(this, priceOfCar, img);
        this.cName = "Cars";
        this.name = nameOfCar;
        this.company = companyOfCar;
        this.model = modelOfCar;
        this.engine = engineOfCar;
        this.color = colorOfCar;
    }
    return Cars;
}(Ads));
exports.Cars = Cars;
var DisplayCar = (function () {
    function DisplayCar() {
        this.ad = [
            { x: new Cars("Corolla", "Toyota", 2016, 1500, "white", 540000, "app/Images/corolla.jpg") },
            { x: new Cars("CheryQQ", "Santro", 2016, 1000, "red", 205000, "app/Images/cheryqq.jpg") }
        ];
    }
    DisplayCar = __decorate([
        core_1.Component({
            selector: 'car',
            template: "<div class=\"panel panel-primary\">\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\"> {{this.ad[0].x.name}} </h3>\n                </div>\n                <div class=\"panel-body row\">\n                    <div class= \"col-sm-4\">\n                        <img src= {{this.ad[0].x.image}} alt=\"car\" height=\"100\" width=\"100\" />\n                    </div>\n                    <div class=\"col-sm-8\">\n                       <strong> Company: </strong> {{this.ad[0].x.company}} <br />\n                       <strong> Model: </strong> {{this.ad[0].x.model}} <br />\n                       <strong> Engine: </strong> {{this.ad[0].x.engine}} cc <br />\n                       <strong> Color: </strong>{{this.ad[0].x.color}} \n                    </div>\n                </div>\n                <div class=\"panel-footer text-right\"> <strong>Price: Rs. {{this.ad[0].x.price}}/-</strong> </div>\n                </div>"
        })
    ], DisplayCar);
    return DisplayCar;
}());
exports.DisplayCar = DisplayCar;
