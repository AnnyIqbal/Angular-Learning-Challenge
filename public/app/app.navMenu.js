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
    // constructor automatically assigns the argument values to class attributes whenever a new instance is generated
    function Books(titleOfBook, authorOfBook, subjectOfBook, priceOfBook, imgOfBook) {
        _super.call(this, priceOfBook, imgOfBook);
        this.cName = "Books";
        this.img = "Images/b1.png";
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
    function Cars(nameOfCar, companyOfCar, modelOfCar, engineOfCar, colorOfCar, priceOfCar, imgOfCar) {
        _super.call(this, priceOfCar, imgOfCar);
        this.cName = "Cars";
        this.img = "Images/c6.png";
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
    function Mobiles(modelOfMobile, companyOfMobile, colorOfMobile, screenSizeOfMobile, priceOfMobile, imgOfMobile) {
        _super.call(this, priceOfMobile, imgOfMobile);
        this.cName = "Mobiles";
        this.img = "Images/m3.png";
        this.model = modelOfMobile;
        this.company = companyOfMobile;
        this.color = colorOfMobile;
        this.screenSize = screenSizeOfMobile;
        this.price = priceOfMobile;
    }
    Mobiles.prototype.display = function () {
        return ("<strong> Model: </strong>" + this.model + "<br /> <strong> Company: </strong>" + this.company + "<br /> <strong> Color: </strong>" + this.color + "<br /> <strong> Screen Size: </strong>" + this.screenSize);
    };
    return Mobiles;
}(Ads));
exports.Mobiles = Mobiles;
var adsArray = (function () {
    function adsArray() {
        this.ad = [
            { x: new Books("HTML & CSS", "Jon Duckett", "HTML & CSS", 200, "app/Images/htmlcss.png") },
            { x: new Books("Git Essentials", "Ferdinando Santacroce", "Git", 700, "app/Images/git.png") },
            { x: new Mobiles("J1-Ace", "Samsung", "white", 4.3, 19000, "app/Images/j1.jpg") },
            { x: new Books("A Smarter Way To Learn JavaScript", "Mark Mayers", "JavaScript", 500, "app/Images/js.png") },
            { x: new Cars("Vitz", "Toyota", 2017, 1200, "black", 500000, "app/Images/vitz.jpg") },
            { x: new Cars("Corolla", "Toyota", 2016, 1500, "white", 540000, "app/Images/corolla.jpg") },
            { x: new Cars("CheryQQ", "Santro", 2016, 1000, "red", 205000, "app/Images/cheryqq.jpg") },
            { x: new Mobiles("Noir S1", "Q-Mobile", "black", 5, 11000, "app/Images/S1.png") },
            { x: new Mobiles("E8-2", "htc", "black", 5, 27000, "app/Images/htc.jpg") }
        ]; // objects are pushed dynamically whenever a user posts ad
    }
    return adsArray;
}());
exports.adsArray = adsArray;
var NavMenu = (function () {
    function NavMenu() {
        this.postAd = "app/Images/posturad.png";
    }
    NavMenu.prototype.fieldsEmptied = function () {
        var inputs = document.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }
        // de-selecting the select category option in form
        var select = document.getElementById("category").value = 'null';
    };
    NavMenu = __decorate([
        core_1.Component({
            selector: 'navMenu',
            templateUrl: 'app/app.navMenu.html'
        })
    ], NavMenu);
    return NavMenu;
}());
exports.NavMenu = NavMenu;
