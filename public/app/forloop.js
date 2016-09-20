"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var app_navMenu_1 = require('./app.navMenu');
var Loop = (function () {
    function Loop() {
        this.ad = [
            { x: new app_navMenu_1.Books("HTML & CSS", "Jon Duckett", "HTML & CSS", 200, "Images/htmlcss.png") },
            { x: new app_navMenu_1.Books("Git Essentials", "Ferdinando Santacroce", "Git", 700, "Images/git.png") },
            { x: new app_navMenu_1.Mobiles("J1-Ace", "Samsung", "white", 4.3, 19000, "Images/j1.jpg") },
            { x: new app_navMenu_1.Books("A Smarter Way To Learn JavaScript", "Mark Mayers", "JavaScript", 500, "Images/js.png") },
            { x: new app_navMenu_1.Cars("Vitz", "Toyota", 2017, 1200, "black", 500000, "Images/vitz.jpg") },
            { x: new app_navMenu_1.Cars("Corolla", "Toyota", 2016, 1500, "white", 540000, "Images/corolla.jpg") },
            { x: new app_navMenu_1.Cars("CheryQQ", "Santro", 2016, 1000, "red", 205000, "Images/cheryqq.jpg") },
            { x: new app_navMenu_1.Mobiles("Noir S1", "Q-Mobile", "black", 5, 11000, "Images/S1.png") },
            { x: new app_navMenu_1.Mobiles("E8-2", "htc", "black", 5, 27000, "Images/htc.jpg") }
        ]; // objects are pushed dynamically whenever a user posts ad
    }
    Loop.prototype.displayCorrectObject = function (item) {
        // let z: boolean; 
        // if(item.x.cName === 'Cars') {
        //     z=true;
        // }
        // else {
        //     z=false;
        // }
        // console.log(z);
        //document.getElementById("all").innerHTML += 'item.x.display()';
        var bookArray = [];
        if (item.x.cName === 'Books') {
            bookArray.push(item);
            document.getElementById("all").innerHTML += '<book></book>';
        }
        else if (item.x.cName === 'Cars') {
            document.getElementById("all").innerHTML += '<car></car>';
        }
        else if (item.x.cName === 'Mobiles') {
            document.getElementById("all").innerHTML += '<mobile></mobile>';
        }
    };
    Loop = __decorate([
        core_1.Component({
            selector: 'for',
            template: "<ul>\n                    <li *ngFor=\"let item of ad\"><allAds></allAds> {{displayCorrectObject(item)}} </li>\n               </ul>",
            styles: ["\n    li {\n        list-style-type: none;\n    }\n    "]
        })
    ], Loop);
    return Loop;
}());
exports.Loop = Loop;
