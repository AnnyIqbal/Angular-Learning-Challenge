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
    //img : string = "Images/b1.png"; //y working not???? i want to have img as an optional param having a default value 
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
    NavMenu.prototype.pushAd = function () {
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
                    '<div class="panel-footer text-right"> <strong>Price: Rs. ' + this.ad[lastIndex].x.price + '/-</strong> </div>' +
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
    NavMenu.prototype.for = function (i, i, i) {
        if (i === void 0) { i = 0; }
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
    }; // for-loop ends
    NavMenu.prototype.for = function (i, i, i) {
        if (i === void 0) { i = 0; }
        if (i === void 0) { i = .ad.length; }
        if (i === void 0) { i = ++; }
        var classDeterminator = this.ad[i].x.cName; // returns class name
        if (classDeterminator === "Books") {
            this.showBook = '<div class="panel panel-primary">' +
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
            document.getElementById("books").innerHTML += this.showBook;
        }
    };
    NavMenu.prototype.for = ;
    NavMenu = __decorate([
        core_1.Component({
            selector: 'navMenu',
            template: "\n<!-- Navigation Tabs-->     \n        <div>\n            <ul class=\"nav nav-tabs\" role=\"tablist\">\n                <li role=\"presentation\" class=\"active\">\n                    <a href=\"#all\" aria-controls=\"all\" role=\"tab\" data-toggle=\"tab\">\n                        <img src=\"Images/all.png\" alt=\"all\" class=\"img-responsive center-block\" />\n                    </a>\n                </li>\n                <li role=\"presentation\" id=\"bTab\">\n                    <a href=\"#books\" aria-controls=\"books\" role=\"tab\" data-toggle=\"tab\">\n                        <img src=\"Images/b1.png\" alt=\"books\" class=\"img-responsive center-block\" />\n                    </a>\n                </li>\n                <li role=\"presentation\" id=\"cTab\">\n                    <a href=\"#cars\" aria-controls=\"cars\" role=\"tab\" data-toggle=\"tab\">\n                        <img src=\"Images/c6.png\" alt=\"cars\" class=\"img-responsive center-block\" />\n                    </a>\n                </li>\n                <li role=\"presentation\" id=\"mTab\">\n                    <a href=\"#mobiles\" aria-controls=\"mobiles\" role=\"tab\" data-toggle=\"tab\">\n                       <img src=\"Images/m1.png\" alt=\"mobiles\" class=\"img-responsive center-block\" />\n                    </a>\n                </li>\n                <li id=\"button\" role=\"presentation\">\n                    <a href=\"#form\" type=\"button\" aria-controls=\"form\" role=\"tab\" data-toggle=\"tab\" onclick=\"fieldsEmptied();\">\n                        <!--class=\"btn btn-primary\"-->\n                        <img src=\"Images/posturad.png\" alt=\"Post Ad\" /> \n                    </a>\n                </li>\n            </ul>\n\n            <!--Tab Panes-->\n            <div class=\"tab-content\">\n                <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"all\">\n                    <div id=\"p1\">\n                        <h1> All Ads </h1>\n                    </div> \n                    <div id=\"p2\" class=\"hidden\">\n                        <h1> All Ads </h1>\n                    </div> \n                    <div id=\"p3\" class=\"hidden\">\n                        <h1> All Ads </h1>\n                    </div>                 \n                    <nav aria-label=\"Page navigation\"> <!-- pagination list -->\n                        <ul class=\"pagination\">\n                            <!--<li><span><span aria-hidden=\"true\">&laquo;</span></span></li>-->\n                            <li class=\"active\"><a href=\"#p1\" onclick=\"activatePage('p1', this);\">1</a></li>\n                            <li><a href=\"#p2\" onclick=\"activatePage('p2', this);\">2</a></li>\n                            <li><a href=\"#p3\" onclick=\"activatePage('p3', this);\">3</a></li>\n                            <!--<li><span><span aria-hidden=\"true\">&raquo;</span></span></li>-->\n                        </ul>\n                    </nav> <!-- /pagination list -->\n                </div>\n                <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"books\">\n                    <h1> Books </h1>\n                </div>\n                <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"cars\">\n                    <h1> Cars </h1>\n                </div>\n                <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"mobiles\">\n                    <h1> Mobiles </h1>\n                </div>\n            </div>\n        </div>\n<!--/Navigation Tabs-->"
        })
    ], NavMenu);
    return NavMenu;
}());
exports.NavMenu = NavMenu;
var i = 0;
i < this.ad.length;
i++;
{
    var classDeterminator = this.ad[i].x.cName; // returns class name
    if (classDeterminator === "Cars") {
        this.showCar = '<div class="panel panel-primary">' +
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
            '</div>'; // creating new panel with title and content for car
        document.getElementById("cars").innerHTML += this.showCar;
    }
}
// display the Mobiles tab
showMobile: string;
for (var i = 0; i < this.ad.length; i++) {
    var classDeterminator = this.ad[i].x.cName; // returns class name
    if (classDeterminator === "Mobiles") {
        this.showMobile = '<div class="panel panel-primary">' +
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
        document.getElementById("mobiles").innerHTML += this.showMobile;
    }
}
