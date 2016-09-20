"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var allAds = (function () {
    function allAds() {
    }
    allAds.prototype.for = function (let, i, i) {
        if (let === void 0) { let = i = 0; }
        if (i === void 0) { i = .ad.length; }
        if (i === void 0) { i = ++; }
        var classDeterminator = this.ad[i].x.cName; // returns class name 
        switch (classDeterminator) {
            case 'Books': {
                this.a = '<div class="panel panel-primary">' +
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
                    document.getElementById("p1").innerHTML += this.a; // error araha hai cant read innerHTML of null :/
                }
                else if (i >= 4 && i <= 7) {
                    document.getElementById("p2").innerHTML += this.a;
                }
                else if (i >= 8) {
                    document.getElementById("p3").innerHTML += this.a;
                }
                break;
            }
            case 'Cars': {
                this.a = '<div class="panel panel-primary">' +
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
                    document.getElementById("p1").innerHTML += this.a; // error araha hai cant read innerHTML of null :/
                }
                else if (i >= 4 && i <= 7) {
                    document.getElementById("p2").innerHTML += this.a;
                }
                else if (i >= 8) {
                    document.getElementById("p3").innerHTML += this.a;
                }
                break;
            }
            case 'Mobiles': {
                this.a = '<div class="panel panel-primary">' +
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
                    document.getElementById("p1").innerHTML += this.a; // error araha hai cant read innerHTML of null :/
                }
                else if (i >= 4 && i <= 7) {
                    document.getElementById("p2").innerHTML += this.a;
                }
                else if (i >= 8) {
                    document.getElementById("p3").innerHTML += this.a;
                }
                break;
            }
            default: {
                alert("Error!"); // yahan pohnchenge hi nhi hopefully
            }
        } // switch ends
    };
    allAds = __decorate([
        core_1.Component({
            selector: 'allAds',
            template: ""
        })
    ], allAds);
    return allAds;
}());
exports.allAds = allAds; // for-loop ends
// display the Books tab
var showBook;
for (var i = 0; i < this.ad.length; i++) {
    var classDeterminator = this.ad[i].x.cName; // returns class name
    if (classDeterminator === "Books") {
        showBook = '<div class="panel panel-primary">' +
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
            '</div>'; // creating new panel with title and content for book 
        document.getElementById("books").innerHTML += showBook;
    }
}
// display the Cars tab
var showCar;
for (var i = 0; i < this.ad.length; i++) {
    var classDeterminator = this.ad[i].x.cName; // returns class name
    if (classDeterminator === "Cars") {
        showCar = '<div class="panel panel-primary">' +
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
            '<div class="panel-footer text-right"> <strong>Price: Rs. ' + ad[i].x.price + '/-</strong> </div>' +
            '</div>'; // creating new panel with title and content for car
        document.getElementById("cars").innerHTML += showCar;
    }
}
// display the Mobiles tab
var showMobile;
for (var i = 0; i < this.ad.length; i++) {
    var classDeterminator = this.ad[i].x.cName; // returns class name
    if (classDeterminator === "Mobiles") {
        showMobile = '<div class="panel panel-primary">' +
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
            '</div>'; // creating new panel with title and content for mobile
        document.getElementById("mobiles").innerHTML += showMobile;
    }
}
