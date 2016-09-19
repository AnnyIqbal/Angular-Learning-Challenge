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
var Books = (function (_super) {
    __extends(Books, _super);
    //img : string = "app/Images/b1.png"; //y working not???? i want to have img as an optional param having a default value 
    // constructor automatically assigns the argument values to class attributes whenever a new instance is generated
    function Books(titleOfBook, authorOfBook, subjectOfBook, priceOfBook, img) {
        _super.call(this, priceOfBook, img);
        this.cName = "Books";
        this.title = titleOfBook;
        this.author = authorOfBook;
        this.subject = subjectOfBook;
    }
    Books.prototype.display = function () {
        return ("<strong> Title: </strong> " + this.title + "<br /> <strong> Author: </strong>" + this.author + "<br /> <strong> Subject: </strong>" + this.subject);
    };
    return Books;
}(Ads));
exports.Books = Books;
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
    Cars.prototype.display = function () {
        return ("<strong> Name: </strong>" + this.name + "<br /> <strong> Company: </strong>" + this.company + "<br /> <strong> Model: </strong>" + this.model + "<br /> <strong> Engine: </strong> " + this.engine + "cc <br /> <strong> Color: </strong>" + this.color);
    };
    return Cars;
}(Ads));
exports.Cars = Cars;
var Mobiles = (function (_super) {
    __extends(Mobiles, _super);
    function Mobiles(modelOfMobile, companyOfMobile, colorOfMobile, screenSizeOfMobile, priceOfMobile, img) {
        _super.call(this, priceOfMobile, img);
        this.cName = "Mobiles";
        this.model = modelOfMobile;
        this.company = companyOfMobile;
        this.color = colorOfMobile;
        this.screenSize = screenSizeOfMobile;
        this.price = priceOfMobile;
        this.image = img;
    }
    Mobiles.prototype.display = function () {
        return ("<strong> Model: </strong>" + this.model + "<br /> <strong> Company: </strong>" + this.company + "<br /> <strong> Color: </strong>" + this.color + "<br /> <strong> Screen Size: </strong>" + this.screenSize);
    };
    return Mobiles;
}(Ads));
exports.Mobiles = Mobiles;
var NavMenu = (function () {
    function NavMenu() {
        this.postAd = "app/Images/posturad.png";
    }
    NavMenu = __decorate([
        core_1.Component({
            selector: 'navMenu',
            template: "\n<!-- Navigation Tabs-->     \n        <div>\n            <ul class=\"nav nav-tabs\" role=\"tablist\">\n                <li role=\"presentation\" class=\"active\">\n                    <a href=\"#all\" aria-controls=\"all\" role=\"tab\" data-toggle=\"tab\">\n                        <img src=\"app/Images/all.png\" alt=\"all\" class=\"img-responsive center-block\" />\n                    </a>\n                </li>\n                <li role=\"presentation\" id=\"bTab\">\n                    <a href=\"#books\" aria-controls=\"books\" role=\"tab\" data-toggle=\"tab\">\n                        <img src=\"app/Images/b1.png\" alt=\"books\" class=\"img-responsive center-block\" />\n                    </a>\n                </li>\n                <li role=\"presentation\" id=\"cTab\">\n                    <a href=\"#cars\" aria-controls=\"cars\" role=\"tab\" data-toggle=\"tab\">\n                        <img src=\"app/Images/c6.png\" alt=\"cars\" class=\"img-responsive center-block\" />\n                    </a>\n                </li>\n                <li role=\"presentation\" id=\"mTab\">\n                    <a href=\"#mobiles\" aria-controls=\"mobiles\" role=\"tab\" data-toggle=\"tab\">\n                       <img src=\"app/Images/m1.png\" alt=\"mobiles\" class=\"img-responsive center-block\" />\n                    </a>\n                </li>\n                <li id=\"button\" role=\"presentation\">\n                    <a href=\"#form\" type=\"button\" aria-controls=\"form\" role=\"tab\" data-toggle=\"tab\" onclick=\"fieldsEmptied();\">\n                        <!--class=\"btn btn-primary\"-->\n                        <img [src]=\"postAd\" alt=\"Post Ad\" /> \n                    </a>\n                </li>\n            </ul>\n\n            <!--Tab Panes-->\n            <div class=\"tab-content\">\n                <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"all\">\n                    <div id=\"p1\">\n                        <h1> All Ads </h1>\n                    </div> \n                    <div id=\"p2\" class=\"hidden\">\n                        <h1> All Ads </h1>\n                    </div> \n                    <div id=\"p3\" class=\"hidden\">\n                        <h1> All Ads </h1>\n                    </div>                 \n                    <nav aria-label=\"Page navigation\"> <!-- pagination list -->\n                        <ul class=\"pagination\">\n                            <!--<li><span><span aria-hidden=\"true\">&laquo;</span></span></li>-->\n                            <li class=\"active\"><a href=\"#p1\" onclick=\"activatePage('p1', this);\">1</a></li>\n                            <li><a href=\"#p2\" onclick=\"activatePage('p2', this);\">2</a></li>\n                            <li><a href=\"#p3\" onclick=\"activatePage('p3', this);\">3</a></li>\n                            <!--<li><span><span aria-hidden=\"true\">&raquo;</span></span></li>-->\n                        </ul>\n                    </nav> <!-- /pagination list -->\n                </div>\n                <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"books\">\n                    <h1> Books </h1>\n                </div>\n                <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"cars\">\n                    <h1> Cars </h1>\n                </div>\n                <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"mobiles\">\n                    <h1> Mobiles </h1>\n                </div>\n            </div>\n        </div>\n<!--/Navigation Tabs-->"
        })
    ], NavMenu);
    return NavMenu;
}());
exports.NavMenu = NavMenu;
