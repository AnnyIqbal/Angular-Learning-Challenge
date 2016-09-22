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
var adObjects_1 = require('./adObjects');
var Loop = (function () {
    function Loop() {
        // choice: string;
        this.ad = [
            { x: new adObjects_1.Books("HTML & CSS", "Jon Duckett", "HTML & CSS", 200, "app/Images/htmlcss.png") },
            { x: new adObjects_1.Books("Git Essentials", "Ferdinando Santacroce", "Git", 700, "app/Images/git.png") },
            { x: new adObjects_1.Mobiles("J1-Ace", "Samsung", "white", 4.3, 19000, "app/Images/j1.jpg") },
            { x: new adObjects_1.Books("A Smarter Way To Learn JavaScript", "Mark Mayers", "JavaScript", 500, "app/Images/js.png") },
            { x: new adObjects_1.Cars("Vitz", "Toyota", 2017, 1200, "black", 500000, "app/Images/vitz.jpg") },
            { x: new adObjects_1.Cars("Corolla", "Toyota", 2016, 1500, "white", 540000, "app/Images/corolla.jpg") },
            { x: new adObjects_1.Cars("CheryQQ", "Santro", 2016, 1000, "red", 205000, "app/Images/cheryqq.jpg") },
            { x: new adObjects_1.Mobiles("Noir S1", "Q-Mobile", "black", 5, 11000, "app/Images/S1.png") },
            { x: new adObjects_1.Mobiles("E8-2", "htc", "black", 5, 27000, "app/Images/htc.jpg") }
        ];
    }
    Loop = __decorate([
        core_1.Component({
            selector: 'for',
            template: "\n    <ul>\n        <li *ngFor=\"let item of ad\">\n            <ul [ngSwitch]=\"item.x.cName\">\n               <li *ngSwitchCase=\"'Books'\">\n                    <div class=\"panel panel-primary\">\n                        <div class=\"panel-heading\">\n                            <h3 class=\"panel-title\"> {{item.x.subject}} </h3>\n                        </div>\n                        <div class=\"panel-body row\">\n                            <div class= \"col-sm-4\">\n                                <img src={{item.x.image}} alt=\"book\" height=\"100\" width=\"100\" />\n                            </div>\n                            <div class=\"col-sm-8\"> \n                                <strong> Title: </strong> {{item.x.title}} <br />\n                                <strong> Author: </strong> {{item.x.author}} <br />\n                                <strong> Subject: </strong> {{item.x.subject}} \n                            </div>\n                        </div>\n                        <div class=\"panel-footer text-right\"> <strong>Price: Rs. {{item.x.price}} /-</strong> </div>\n                    </div>\n                </li>\n               <li *ngSwitchCase=\"'Cars'\">\n                   <div class=\"panel panel-primary\">\n                        <div class=\"panel-heading\">\n                            <h3 class=\"panel-title\"> {{item.x.name}} </h3>\n                        </div>\n                    <div class=\"panel-body row\">\n                        <div class= \"col-sm-4\">\n                            <img src= {{item.x.image}} alt=\"car\" height=\"100\" width=\"100\" />\n                        </div>\n                        <div class=\"col-sm-8\">\n                        <strong> Company: </strong> {{item.x.company}} <br />\n                        <strong> Model: </strong> {{item.x.model}} <br />\n                        <strong> Engine: </strong> {{item.x.engine}} cc <br />\n                        <strong> Color: </strong>{{item.x.color}} \n                        </div>\n                    </div>\n                    <div class=\"panel-footer text-right\"> <strong>Price: Rs. {{item.x.price}}/-</strong> </div>\n                </div>\n        </li>\n        <li *ngSwitchCase=\"'Mobiles'\">\n            <div class=\"panel panel-primary\">\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\"> {{item.x.company }} {{item.x.model}} </h3>\n                </div>\n                <div class=\"panel-body row\">\n                    <div class= \"col-sm-4\">\n                        <img src={{item.x.image}} alt=\"car\" height=\"100\" width=\"100\" />\n                    </div>\n                    <div class=\"col-sm-8\">\n                        <strong> Model: </strong> {{item.x.model}} <br />\n                        <strong> Company: </strong> {{item.x.company }} <br />\n                        <strong> Color: </strong> {{item.x.color}} <br />\n                        <strong> Screen Size: </strong> {{item.x.screenSize}}\n                    </div>\n                </div>\n                <div class=\"panel-footer text-right\"> <strong>Price: Rs. {{item.x.price}}/-</strong> </div>\n            </div>\n        </li>\n        <li *ngSwitchDefault>Default choice</li>\n    </ul>\n  </li>\n</ul>\n            ",
            styles: ["\n    li {\n        list-style-type: none;\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], Loop);
    return Loop;
}());
exports.Loop = Loop;
//# sourceMappingURL=forloop.js.map