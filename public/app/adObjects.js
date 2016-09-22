"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        this.img = "app/Images/b1.png";
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
        this.img = "app/Images/c6.png";
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
        this.img = "app/Images/m3.png";
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
//# sourceMappingURL=adObjects.js.map