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
var formInput = (function () {
    function formInput() {
        this.ad = [
            { x: new Books("HTML & CSS", "Jon Duckett", "HTML & CSS", 200, "Images/htmlcss.png") },
            { x: new Books("Git Essentials", "Ferdinando Santacroce", "Git", 700, "Images/git.png") },
            { x: new Mobiles("J1-Ace", "Samsung", "white", 4.3, 19000, "Images/j1.jpg") },
            { x: new Books("A Smarter Way To Learn JavaScript", "Mark Mayers", "JavaScript", 500, "Images/js.png") },
            { x: new Cars("Vitz", "Toyota", 2017, 1200, "black", 500000, "Images/vitz.jpg") },
            { x: new Cars("Corolla", "Toyota", 2016, 1500, "white", 540000, "Images/corolla.jpg") },
            { x: new Cars("CheryQQ", "Santro", 2016, 1000, "red", 205000, "Images/cheryqq.jpg") },
            { x: new Mobiles("Noir S1", "Q-Mobile", "black", 5, 11000, "Images/S1.png") },
            { x: new Mobiles("E8-2", "htc", "black", 5, 27000, "Images/htc.jpg") }
        ]; // objects are pushed dynamically whenever a user posts ad
    }
    formInput.prototype.isNotEmpty = function (id) {
        var check = document.getElementById(id);
        if (check.value.toString().length === 0) {
            alert("This is a required field!"); //throw error
            check.focus(); // set focus on the field
        }
        else {
            return true;
        }
    };
    formInput.prototype.validateForm = function () {
        var cat = document.getElementById("category").value;
        switch (cat) {
            case "book": {
                if (this.isNotEmpty("username") && this.isNotEmpty("email")) {
                    if (this.isNotEmpty("Btitle") && this.isNotEmpty("author") && this.isNotEmpty("subject") && this.isNotEmpty("Bprice")) {
                        this.pushAd();
                    }
                }
                break;
            }
            case "car": {
                if (this.isNotEmpty("username") && this.isNotEmpty("email")) {
                    if (this.isNotEmpty("name") && this.isNotEmpty("Ccompany") && this.isNotEmpty("Cmodel") && this.isNotEmpty("engine") && this.isNotEmpty("Ccolor") && this.isNotEmpty("Cprice")) {
                        this.pushAd();
                    }
                }
                break;
            }
            case "mobile": {
                if (this.isNotEmpty("username") && this.isNotEmpty("email")) {
                    if (this.isNotEmpty("Mmodel") && this.isNotEmpty("Mcompany") && this.isNotEmpty("Mcolor") && this.isNotEmpty("screensize") && this.isNotEmpty("Mprice")) {
                        this.pushAd();
                    }
                }
                break;
            }
            default: {
                if (this.isNotEmpty("username") && this.isNotEmpty("email")) {
                    alert("Select a category please!"); // throw error
                }
            }
        } // </switch>
    };
    formInput.prototype.pushAd = function () {
        // selected ad category
        var cat = document.getElementById("category").value; // type casting string into HTMLInputElement
        //push the ad as an object in the ads array
        switch (cat) {
            case 'book': {
                // getting all input values
                var title = document.getElementById("Btitle").value; // type casting string into HTMLInputElement
                var author = document.getElementById("author").value;
                var subject = document.getElementById("subject").value;
                var price = parseFloat(document.getElementById("Bprice").value);
                var image = document.getElementById("Bimage").value; // C:\fakepath\filename.extension
                var filename = image.slice(12, image.length); //filename.extension
                var src = "C:/Users/Public/Pictures/" + filename; // the img u hv 2 upload should be placed at the specific url
                //creating new Books instance and pushing dynamically in the ad array
                this.ad.push({ x: new Books(title, author, subject, price, src) }); // passing specific url for image upload, img must be at that location
                document.getElementById("books").className = "tab-pane fade in active"; // activate books tab
                document.getElementById("form").className = "tab-pane fade"; // deactivate form tab  
                // display it in the All & Books tab
                var showBook = void 0, lastIndex = this.ad.length - 1;
                showBook = '<div class="panel panel-primary">' +
                    '<div class="panel-heading">' +
                    '<h3 class="panel-title">' +
                    this.ad[lastIndex].x.subject +
                    '</h3>' +
                    '</div>' +
                    '<div class="panel-body row">' +
                    '<div class= "col-sm-4">' +
                    '<img src=' + this.ad[lastIndex].x.image + ' alt="book" height="100" width="100" />' +
                    '</div>' +
                    '<div class="col-sm-8">' +
                    this.ad[lastIndex].x.display() +
                    '</div>' +
                    '</div>' +
                    '<div class="panel-footer text-right"> <strong>Price: Rs. ' + this.ad[lastIndex].x.price + '/-</strong> </div>' +
                    '</div>'; // creating new panel with title and content for book 
                document.getElementById("p3").innerHTML += showBook; // "all" tab page 3, id="p3"
                document.getElementById("books").innerHTML += showBook;
                document.getElementById("button").className = ''; // deactivating the nav bar's POST AD button
                document.getElementById("bTab").className = 'active'; // activating the books tab
                break;
            }
            case 'car': {
                // getting all input values
                var name_1 = document.getElementById("name").value; // type casting string into HTMLInputElement
                var company = document.getElementById("Ccompany").value; // alternate way to type casting 
                var model = parseFloat(document.getElementById("Cmodel").value);
                var engine = parseFloat(document.getElementById("engine").value);
                var color = document.getElementById("Ccolor").value;
                var price = parseFloat(document.getElementById("Cprice").value);
                var image = document.getElementById("Cimage").value; // C:\fakepath\filename.extension
                var filename = image.slice(12, image.length); //filename.extension
                var src = "C:/Users/Public/Pictures/" + filename; // the img u hv 2 upload should be placed at the specific url
                //creating new Cars instance and pushing dynamically in the ad array
                this.ad.push({ x: new Cars(name_1, company, model, engine, color, price, src) });
                document.getElementById("cars").className = "tab-pane fade in active"; // activate cars tab
                document.getElementById("form").className = "tab-pane fade"; // deactivate form tab  
                // display it in the All & Cars tab
                var showCar = void 0, lastIndex = this.ad.length - 1;
                showCar = '<div class="panel panel-primary">' +
                    '<div class="panel-heading">' +
                    '<h3 class="panel-title">' +
                    this.ad[lastIndex].x.name +
                    '</h3>' +
                    '</div>' +
                    '<div class="panel-body row">' +
                    '<div class= "col-sm-4">' +
                    '<img src=' + this.ad[lastIndex].x.image + ' alt="car" height="100" width="100" />' +
                    '</div>' +
                    '<div class="col-sm-8">' +
                    this.ad[lastIndex].x.display() +
                    '</div>' +
                    '</div>' +
                    '<div class="panel-footer text-right"> <strong>Price: Rs. ' + this.ad[lastIndex].x.price + '/-</strong> </div>' +
                    '</div>'; // creating new panel with title and content for car
                document.getElementById("p3").innerHTML += showCar; // "all" tab page 3, id="p3"
                document.getElementById("cars").innerHTML += showCar;
                document.getElementById("button").className = ''; // deactivating the nav bar's POST AD button
                document.getElementById("cTab").className = 'active'; //activating the cars tab
                break;
            }
            case 'mobile': {
                // getting all input values
                var model = document.getElementById("Mmodel").value; // type casting string into HTMLInputElement
                var company = document.getElementById("Mcompany").value;
                var color = document.getElementById("Mcolor").value;
                var screenSize = parseFloat(document.getElementById("screensize").value);
                var price = parseFloat(document.getElementById("Mprice").value);
                var image = document.getElementById("Mimage").value; // C:\fakepath\filename.extension
                var filename = image.slice(12, image.length); //filename.extension
                var src = "C:/Users/Public/Pictures/" + filename; // the img u hv 2 upload should be placed at the specific url
                //creating new Mobiles instance and pushing dynamically in the ad array
                this.ad.push({ x: new Mobiles(model, company, color, screenSize, price, src) });
                document.getElementById("mobiles").className = "tab-pane fade in active"; // activate mobiles tab
                document.getElementById("form").className = "tab-pane fade"; // deactivate form tab  
                // display it in the All & Mobiles tab
                var showMobile = void 0, lastIndex = this.ad.length - 1;
                showMobile = '<div class="panel panel-primary">' +
                    '<div class="panel-heading">' +
                    '<h3 class="panel-title">' +
                    this.ad[lastIndex].x.company + ' ' + this.ad[lastIndex].x.model +
                    '</h3>' +
                    '</div>' +
                    '<div class="panel-body row">' +
                    '<div class= "col-sm-4">' +
                    '<img src=' + this.ad[lastIndex].x.image + ' alt="mobile" height="100" width="100" />' +
                    '</div>' +
                    '<div class="col-sm-8">' +
                    this.ad[lastIndex].x.display() +
                    '</div>' +
                    '</div>' +
                    '<div class="panel-footer text-right"> <strong>Price: Rs. ' + ad[lastIndex].x.price + '/-</strong> </div>' +
                    '</div>'; // creating new panel with title and content for mobile
                document.getElementById("p3").innerHTML += showMobile; // "all" tab page 3, id="p3"
                document.getElementById("mobiles").innerHTML += showMobile;
                document.getElementById("button").className = ''; // deactivating the nav bar's POST AD button
                document.getElementById("mTab").className = 'active'; //activating the mobiles tab
                break;
            }
            default: {
                alert("Error! select a proper category"); // ni pohnchenge yhn
            }
        } // </switch>
        // hiding all form category divs
        document.getElementById("book").className = "hidden";
        document.getElementById("car").className = "hidden";
        document.getElementById("mobile").className = "hidden";
    };
    formInput = __decorate([
        core_1.Component({
            selector: 'FormInput',
            templateUrl: "app.formInput.html"
        }), 
        __metadata('design:paramtypes', [])
    ], formInput);
    return formInput;
}());
exports.formInput = formInput;
//# sourceMappingURL=app.formInput.js.map