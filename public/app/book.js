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
var Books = (function (_super) {
    __extends(Books, _super);
    // constructor automatically assigns the argument values to class attributes whenever a new instance is generated
    function Books(titleOfBook, authorOfBook, subjectOfBook, priceOfBook, img) {
        _super.call(this, priceOfBook, img);
        this.cName = "Books";
        this.title = titleOfBook;
        this.author = authorOfBook;
        this.subject = subjectOfBook;
    }
    return Books;
}(Ads));
exports.Books = Books;
var DisplayBook = (function () {
    function DisplayBook() {
        this.ad = [
            { x: new Books("HTML & CSS", "Jon Duckett", "HTML & CSS", 200, "app/Images/htmlcss.png") },
            { x: new Books("Git Essentials", "Ferdinando Santacroce", "Git", 700, "app/Images/git.png") }
        ]; // objects are pushed dynamically whenever a user posts ad
    }
    DisplayBook = __decorate([
        core_1.Component({
            selector: 'book',
            template: "<div class=\"panel panel-primary\">\n                            <div class=\"panel-heading\">\n                                <h3 class=\"panel-title\"> \n                                    {{ad[0].x.subject}} \n                                </h3>\n                            </div>\n                            <div class=\"panel-body row\">\n                                <div class= \"col-sm-4\">\n                                    <img src={{this.ad[0].x.image}} alt=\"book\" height=\"100\" width=\"100\" /> \n                                </div>\n                                <div class=\"col-sm-8\"> \n                                    <strong> Title: </strong> {{this.ad[0].x.title}} <br />\n                                    <strong> Author: </strong> {{this.ad[0].x.author}} <br />\n                                    <strong> Subject: </strong> {{this.ad[0].x.subject}} \n                                </div>\n                            </div>\n                            <div class=\"panel-footer text-right\"> <strong>Price: Rs. {{this.ad[0].x.price}} /-</strong> </div> \n                        </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], DisplayBook);
    return DisplayBook;
}());
exports.DisplayBook = DisplayBook;
//# sourceMappingURL=book.js.map