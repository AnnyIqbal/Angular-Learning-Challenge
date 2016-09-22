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
//import {formInput} from './app.forminput';
var Loop = (function () {
    function Loop() {
        //  dom : string = document.getElementById("p1").innerHTML;
        //choice: number =1;
        //   @Input() myAd;
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
        ]; // objects are pushed dynamically whenever a user posts ad
    }
    Loop.prototype.displayAd = function () {
        // display the All tab
        // for (var i = 0; i < this.myAd.length; i++) {
        //     let classDeterminator : string = this.myAd[i].x.cName; // returns class name 
        //     switch(classDeterminator) { // use class name to check from which class the object belongs
        //         case 'Books': {
        //             // setting 4 ads per page
        //             // if(i<=3) {
        document.getElementById("p1").innerHTML += "<div class=\"panel panel-primary\">\n                        <div class=\"panel-heading\">\n                            <h3 class=\"panel-title\"> {{this.ad[0].x.subject}} </h3>\n                        </div>\n                        <div class=\"panel-body row\">\n                            <div class= \"col-sm-4\">\n                                <img src={{this.ad[0].x.image}} alt=\"book\" height=\"100\" width=\"100\" />\n                            </div>\n                            <div class=\"col-sm-8\"> {{this.ad[0].x.display()}} </div>\n                        </div>\n                        <div class=\"panel-footer text-right\"> <strong>Price: Rs. {{this.ad[0].x.price}} /-</strong> </div>\n                    </div>"; // error araha hai cant read innerHTML of null :/
        //             // }
        //             // else if(i>=4 && i<=7) {
        //             //     document.getElementById("p2").innerHTML += a;
        //             // }
        //             // else if(i>=8) {
        //             //     document.getElementById("p3").innerHTML += a;
        //             // }
        //             break;
        //         }
        //         case 'Cars' : {
        //             // setting 4 ads per page
        //             // if(i<=3) {
        //                  document.getElementById("p1").innerHTML += '<oneCar></oneCar>'; // error araha hai cant read innerHTML of null :/
        //             // }
        //             // else if(i>=4 && i<=7) {
        //             //     document.getElementById("p2").innerHTML += a;
        //             // }
        //             // else if(i>=8) {
        //             //     document.getElementById("p3").innerHTML += a;
        //             // }
        //             break;
        //         }
        //         case 'Mobiles' : {
        //             // setting 4 ads per page
        //             // if(i<=3) {
        //                  document.getElementById("p1").innerHTML += '<oneMobile></oneMobile>'; // error araha hai cant read innerHTML of null :/
        //             // }
        //             // else if(i>=4 && i<=7) {
        //             //     document.getElementById("p2").innerHTML += a;
        //             // }
        //             // else if(i>=8) {
        //             //     document.getElementById("p3").innerHTML += a;
        //             // }
        //             break;
        //         }
        //         default: {
        //             alert("Error!"); // yahan pohnchenge hi nhi hopefully
        //         }
        //     } // switch ends
        //    } // for-loop ends
        //     var bookArray = [];
        //     if(item.x.cName === 'Books') {
        //         bookArray.push(item);
        //     }
    };
    Loop = __decorate([
        core_1.Component({
            selector: 'for',
            // template: `<div class="ui raised segment">
            //             <ul [ngSwitch]="choice">
            //                 <li *ngSwitchWhen="1">{{dom}} = <oneBook></oneBook> </li>
            //                 <li *ngSwitchWhen="2">{{dom}} = <oneCar></oneCar> </li>
            //                 <li *ngSwitchWhen="3">{{dom}} = <oneMobile></oneMobile> </li>
            //                 <li *ngSwitchDefault>{{dom}} = Select appropriate category </li>
            //             </ul>
            //         </div>`,
            // <ul>
            //         <li *ngFor="let item of ad">
            //         <div class="ui raised segment">
            //             <ul [ngSwitch]="choice">
            //                 <li *ngSwitchWhen="1">{{dom}} = <oneBook></oneBook> </li>
            //                 <li *ngSwitchWhen="2">{{dom}} = <oneCar></oneCar> </li>
            //                 <li *ngSwitchWhen="3">{{dom}} = <oneMobile></oneMobile> </li>
            //                 <li *ngSwitchDefault>{{dom}} = Select appropriate category </li>
            //             </ul>
            //         </div>
            //         </li>
            //         </ul>`,
            template: "<div class=\"panel panel-primary\">\n                        <div class=\"panel-heading\">\n                            <h3 class=\"panel-title\"> {{this.ad[0].x.subject}} </h3>\n                        </div>\n                        <div class=\"panel-body row\">\n                            <div class= \"col-sm-4\">\n                                <img src={{this.ad[0].x.image}} alt=\"book\" height=\"100\" width=\"100\" />\n                            </div>\n                            <div class=\"col-sm-8\"> \n                                     <strong> Title: </strong> {{item.x.title}} <br />\n                                     <strong> Author: </strong> {{item.x.author}} <br />\n                                     <strong> Subject: </strong> {{item.x.subject}} \n                                 </div>\n                        </div>\n                        <div class=\"panel-footer text-right\"> <strong>Price: Rs. {{this.ad[0].x.price}} /-</strong> </div>\n                    </div>",
            // `<div *ngIf="myAd"> {{dom}}="<oneBook></oneBook>"
            //            </div>`,
            //            //{{displayAd()}}
            // template: `<ul>
            //                 <li *ngFor="let item of ad"> 
            //                     {{displayAd(item)}} 
            //                 </li>
            //            </ul>`,
            styles: ["\n    li {\n        list-style-type: none;\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], Loop);
    return Loop;
}());
exports.Loop = Loop;
//# sourceMappingURL=forloopOK.js.map