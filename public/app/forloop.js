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
    Loop.prototype.displayAd = function () {
        // display the All tab
        var a;
        for (var i = 0; i < this.ad.length; i++) {
            var classDeterminator = this.ad[i].x.cName; // returns class name 
            switch (classDeterminator) {
                case 'Books': {
                    a = '<div class="panel panel-primary">' +
                        '<div class="panel-heading">' +
                        '<h3 class="panel-title">' +
                        this.ad[i].x.subject +
                        '</h3>' +
                        '</div>' +
                        '<div class="panel-body row">' +
                        '<div class= "col-sm-4">' +
                        '<img src=' + this.ad[i].x.image + ' alt="book" height="100" width="100" />' +
                        '</div>' +
                        '<div class="col-sm-8">' +
                        this.ad[i].x.display() +
                        '</div>' +
                        '</div>' +
                        '<div class="panel-footer text-right"> <strong>Price: Rs. ' + this.ad[i].x.price + '/-</strong> </div>' +
                        '</div>'; // creates new panel for book
                    // setting 4 ads per page
                    if (i <= 3) {
                        document.getElementById("p1").innerHTML += a; // error araha hai cant read innerHTML of null :/
                    }
                    else if (i >= 4 && i <= 7) {
                        document.getElementById("p2").innerHTML += a;
                    }
                    else if (i >= 8) {
                        document.getElementById("p3").innerHTML += a;
                    }
                    break;
                }
                case 'Cars': {
                    a = '<div class="panel panel-primary">' +
                        '<div class="panel-heading">' +
                        '<h3 class="panel-title">' +
                        this.ad[i].x.name +
                        '</h3>' +
                        '</div>' +
                        '<div class="panel-body row">' +
                        '<div class= "col-sm-4">' +
                        '<img src=' + this.ad[i].x.image + ' alt="car" height="100" width="100" />' +
                        '</div>' +
                        '<div class="col-sm-8">' +
                        this.ad[i].x.display() +
                        '</div>' +
                        '</div>' +
                        '<div class="panel-footer text-right"> <strong>Price: Rs. ' + this.ad[i].x.price + '/-</strong> </div>' +
                        '</div>'; // creates new panel for car
                    // setting 4 ads per page
                    if (i <= 3) {
                        document.getElementById("p1").innerHTML += a; // error araha hai cant read innerHTML of null :/
                    }
                    else if (i >= 4 && i <= 7) {
                        document.getElementById("p2").innerHTML += a;
                    }
                    else if (i >= 8) {
                        document.getElementById("p3").innerHTML += a;
                    }
                    break;
                }
                case 'Mobiles': {
                    a = '<div class="panel panel-primary">' +
                        '<div class="panel-heading">' +
                        '<h3 class="panel-title">' +
                        this.ad[i].x.company + ' ' + this.ad[i].x.model +
                        '</h3>' +
                        '</div>' +
                        '<div class="panel-body row">' +
                        '<div class= "col-sm-4">' +
                        '<img src=' + this.ad[i].x.image + ' alt="mobile" height="100" width="100" />' +
                        '</div>' +
                        '<div class="col-sm-8">' +
                        this.ad[i].x.display() +
                        '</div>' +
                        '</div>' +
                        '<div class="panel-footer text-right"> <strong>Price: Rs. ' + this.ad[i].x.price + '/-</strong> </div>' +
                        '</div>'; // creates new panel for mobile
                    // setting 4 ads per page
                    if (i <= 3) {
                        document.getElementById("p1").innerHTML += a; // error araha hai cant read innerHTML of null :/
                    }
                    else if (i >= 4 && i <= 7) {
                        document.getElementById("p2").innerHTML += a;
                    }
                    else if (i >= 8) {
                        document.getElementById("p3").innerHTML += a;
                    }
                    break;
                }
                default: {
                    alert("Error!"); // yahan pohnchenge hi nhi hopefully
                }
            } // switch ends
        } // for-loop ends
        //     var bookArray = [];
        //     if(item.x.cName === 'Books') {
        //         bookArray.push(item);
        //     }
    };
    Loop = __decorate([
        core_1.Component({
            selector: 'for',
            template: '{{displayAd()}}',
            // template: `<ul>
            //                 <li *ngFor="let item of ad"> 
            //                     {{displayAd(item)}} 
            //                 </li>
            //            </ul>`,
            styles: ["\n    li {\n        list-style-type: none;\n    }\n    "]
        })
    ], Loop);
    return Loop;
}());
exports.Loop = Loop;
