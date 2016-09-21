"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var app_navMenu_1 = require('./app.navMenu');
var DisplayCar = (function () {
    function DisplayCar() {
        this.adcr = [
            { x: new app_navMenu_1.Cars("Corolla", "Toyota", 2016, 1500, "white", 540000, "app/Images/corolla.jpg") },
            { x: new app_navMenu_1.Cars("CheryQQ", "Santro", 2016, 1000, "red", 205000, "app/Images/cheryqq.jpg") }
        ];
    }
    DisplayCar = __decorate([
        core_1.Component({
            selector: 'car',
            template: "<ul>\n                 <li *ngFor=\"let item of adcr\">\n                <div class=\"panel panel-primary\">\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\"> {{item.x.name}} </h3>\n                </div>\n                <div class=\"panel-body row\">\n                    <div class= \"col-sm-4\">\n                        <img src= {{item.x.image}} alt=\"car\" height=\"100\" width=\"100\" />\n                    </div>\n                    <div class=\"col-sm-8\">\n                       <strong> Company: </strong> {{item.x.company}} <br />\n                       <strong> Model: </strong> {{item.x.model}} <br />\n                       <strong> Engine: </strong> {{item.x.engine}} cc <br />\n                       <strong> Color: </strong>{{item.x.color}} \n                    </div>\n                </div>\n                <div class=\"panel-footer text-right\"> <strong>Price: Rs. {{item.x.price}}/-</strong> </div>\n                </div>\n                </li>\n                </ul>",
            styles: ["\n               li {\n                    list-style-type: none;\n                }\n                "]
        })
    ], DisplayCar);
    return DisplayCar;
}());
exports.DisplayCar = DisplayCar;
