"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
//import {formInput} from './app.forminput';
var Loop = (function () {
    function Loop() {
    }
    // ad : any[] = [ // hard coded array for ad listings
    //     {x : new Books("HTML & CSS", "Jon Duckett", "HTML & CSS", 200, "app/Images/htmlcss.png")},
    //     {x : new Books("Git Essentials", "Ferdinando Santacroce", "Git", 700, "app/Images/git.png")},
    //     {x : new Mobiles("J1-Ace", "Samsung", "white", 4.3, 19000, "app/Images/j1.jpg")},
    //     {x : new Books("A Smarter Way To Learn JavaScript", "Mark Mayers", "JavaScript", 500, "app/Images/js.png")},
    //     {x : new Cars("Vitz", "Toyota", 2017, 1200, "black", 500000, "app/Images/vitz.jpg")},
    //     {x : new Cars("Corolla", "Toyota", 2016, 1500, "white", 540000, "app/Images/corolla.jpg")},
    //     {x : new Cars("CheryQQ", "Santro", 2016, 1000, "red", 205000, "app/Images/cheryqq.jpg")},
    //     {x : new Mobiles("Noir S1", "Q-Mobile", "black", 5, 11000, "app/Images/S1.png")},
    //     {x : new Mobiles("E8-2", "htc", "black", 5, 27000, "app/Images/htc.jpg")}
    // ]; // objects are pushed dynamically whenever a user posts ad
    Loop.prototype.displayAd = function () {
        // display the All tab
        var a;
        for (var i = 0; i < this.myAd.length; i++) {
            var classDeterminator = this.myAd[i].x.cName; // returns class name 
            switch (classDeterminator) {
                case 'Books': {
                    a = "<div class=\"panel panel-primary\">\n                        <div class=\"panel-heading\">\n                            <h3 class=\"panel-title\"> {{this.myAd.x.subject}} </h3>\n                        </div>\n                        <div class=\"panel-body row\">\n                            <div class= \"col-sm-4\">\n                                <img src={{this.myAd.x.image}} alt=\"book\" height=\"100\" width=\"100\" />\n                            </div>\n                            <div class=\"col-sm-8\"> {{this.myAd.x.display()}} </div>\n                        </div>\n                        <div class=\"panel-footer text-right\"> <strong>Price: Rs. {{this.myAd.x.price}} /-</strong> </div>\n                    </div>"; // creates new panel for book
                    // setting 4 ads per page
                    // if(i<=3) {
                    document.getElementById("p1").innerHTML += a; // error araha hai cant read innerHTML of null :/
                    // }
                    // else if(i>=4 && i<=7) {
                    //     document.getElementById("p2").innerHTML += a;
                    // }
                    // else if(i>=8) {
                    //     document.getElementById("p3").innerHTML += a;
                    // }
                    break;
                }
                case 'Cars': {
                    a = "<div class=\"panel panel-primary\">\n                        <div class=\"panel-heading\">\n                            <h3 class=\"panel-title\"> {{this.myAd.x.name}} </h3>\n                        </div>\n                        <div class=\"panel-body row\">\n                            <div class= \"col-sm-4\">\n                                <img src={{this.myAd.x.image}} alt=\"car\" height=\"100\" width=\"100\" />\n                            </div>\n                            <div class=\"col-sm-8\"> {{this.myAd.x.display()}} </div>\n                        </div>\n                        <div class=\"panel-footer text-right\"> <strong>Price: Rs. {{this.myAd.x.price}}/-</strong> </div>\n                    </div>"; // creates new panel for car
                    // setting 4 ads per page
                    // if(i<=3) {
                    document.getElementById("p1").innerHTML += a; // error araha hai cant read innerHTML of null :/
                    // }
                    // else if(i>=4 && i<=7) {
                    //     document.getElementById("p2").innerHTML += a;
                    // }
                    // else if(i>=8) {
                    //     document.getElementById("p3").innerHTML += a;
                    // }
                    break;
                }
                case 'Mobiles': {
                    a = "<div class=\"panel panel-primary\">\n                        <div class=\"panel-heading\">\n                            <h3 class=\"panel-title\"> {{this.myAd.x.company}} {{this.myAd.x.model}} </h3>\n                        </div>\n                        <div class=\"panel-body row\">\n                            <div class= \"col-sm-4\">\n                                <img src={{this.myAd.x.image}} alt=\"mobile\" height=\"100\" width=\"100\" />\n                            </div>\n                            <div class=\"col-sm-8\"> {{this.myAd.x.display()}} </div>\n                        </div>\n                        <div class=\"panel-footer text-right\"> <strong>Price: Rs.{{this.myAd.x.price}} /-</strong> </div>\n                    </div>"; // creates new panel for mobile
                    // setting 4 ads per page
                    // if(i<=3) {
                    document.getElementById("p1").innerHTML += a; // error araha hai cant read innerHTML of null :/
                    // }
                    // else if(i>=4 && i<=7) {
                    //     document.getElementById("p2").innerHTML += a;
                    // }
                    // else if(i>=8) {
                    //     document.getElementById("p3").innerHTML += a;
                    // }
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
    __decorate([
        core_1.Input()
    ], Loop.prototype, "myAd");
    Loop = __decorate([
        core_1.Component({
            selector: 'for',
            template: "<div *ngIf=\"myAd\">\n                 {{displayAd()}}\n               </div>",
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
