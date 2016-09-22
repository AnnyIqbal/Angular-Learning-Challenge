"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var adObjects_1 = require('./adObjects');
var DisplayBook = (function () {
    function DisplayBook() {
        this.adbk = [
            { x: new adObjects_1.Books("HTML & CSS", "Jon Duckett", "HTML & CSS", 200, "app/Images/htmlcss.png") },
            { x: new adObjects_1.Books("A Smarter Way To Learn JavaScript", "Mark Mayers", "JavaScript", 500, "app/Images/js.png") },
            { x: new adObjects_1.Books("Git Essentials", "Ferdinando Santacroce", "Git", 700, "app/Images/git.png") }
        ]; // objects are pushed dynamically whenever a user posts ad
    }
    DisplayBook = __decorate([
        core_1.Component({
            selector: 'book',
            template: "<ul>\n                    <li *ngFor=\"let item of adbk\">\n                    <div class=\"panel panel-primary\">\n                            <div class=\"panel-heading\">\n                                <h3 class=\"panel-title\"> \n                                    {{item.x.subject}} \n                                </h3>\n                            </div>\n                            <div class=\"panel-body row\">\n                                <div class= \"col-sm-4\">\n                                    <img src={{item.x.image}} alt=\"book\" height=\"100\" width=\"100\" /> \n                                </div>\n                                <div class=\"col-sm-8\"> \n                                    <strong> Title: </strong> {{item.x.title}} <br />\n                                    <strong> Author: </strong> {{item.x.author}} <br />\n                                    <strong> Subject: </strong> {{item.x.subject}} \n                                </div>\n                            </div>\n                            <div class=\"panel-footer text-right\"> <strong>Price: Rs. {{item.x.price}} /-</strong> </div> \n                        </div>\n                        </li>\n               </ul>",
            // template: `<div class="panel panel-primary">
            //                             <div class="panel-heading">
            //                                 <h3 class="panel-title"> 
            //                                     {{item.x.subject}} 
            //                                 </h3>
            //                             </div>
            //                             <div class="panel-body row">
            //                                 <div class= "col-sm-4">
            //                                     <img src={{item.x.image}} alt="book" height="100" width="100" /> 
            //                                 </div>
            //                                 <div class="col-sm-8"> 
            //                                     <strong> Title: </strong> {{item.x.title}} <br />
            //                                     <strong> Author: </strong> {{item.x.author}} <br />
            //                                     <strong> Subject: </strong> {{item.x.subject}} 
            //                                 </div>
            //                             </div>
            //                             <div class="panel-footer text-right"> <strong>Price: Rs. {{item.x.price}} /-</strong> </div> 
            //                         </div>`,
            styles: ["\n    li {\n        list-style-type: none;\n    }\n    "]
        })
    ], DisplayBook);
    return DisplayBook;
}());
exports.DisplayBook = DisplayBook;
