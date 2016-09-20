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
var NavMenu = (function () {
    function NavMenu() {
        this.postAd = "app/Images/posturad.png";
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
    NavMenu.prototype.fieldsEmptied = function () {
        //document.getElementById("button").innerHTML = '<FormInput></FormInput>';
        var inputs = document.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }
        // de-selecting the select category option in form
        var select = document.getElementById("category").value = 'null';
    };
    /*
    // display the All tab
     a: string;
    
    
    for (let i=0; i < this.ad.length; i++) {
        let classDeterminator : string = this.ad[i].x.cName; // returns class name
    
        switch(classDeterminator) { // use class name to check from which class the object belongs
            case 'Books': {
                this.a = '<div class="panel panel-primary">' +
                            '<div class="panel-heading">' +
                                '<h3 class="panel-title">' + //title
                                    this.ad[i].x.subject +
                                '</h3>' +
                            '</div>' +
                            '<div class="panel-body row">'+
                                '<div class= "col-sm-4">' + //image
                                    '<img src=' + this.ad[i].x.image + ' alt="book" height="100" width="100" />' +
                                '</div>' +
                                '<div class="col-sm-8">' + // details
                                    this.ad[i].x.display() +
                                '</div>' +
                            '</div>' +
                            '<div class="panel-footer text-right"> <strong>Price: Rs. ' + this.ad[i].x.price + '/-</strong> </div>' + //price at footer
                        '</div>'; // creates new panel for book
          
                // setting 4 ads per page
                if(i<=3) {
                    document.getElementById("p1").innerHTML += this.a; // error araha hai cant read innerHTML of null :/
                }
                else if(i>=4 && i<=7) {
                    document.getElementById("p2").innerHTML += this.a;
                }
                else if(i>=8) {
                    document.getElementById("p3").innerHTML += this.a;
                }
                break;
            }
            case 'Cars' : {
                this.a = '<div class="panel panel-primary">' +
                            '<div class="panel-heading">' +
                                '<h3 class="panel-title">' + //title
                                    this.ad[i].x.name +
                                '</h3>' +
                            '</div>' +
                            '<div class="panel-body row">'+
                                '<div class= "col-sm-4">' + //image
                                    '<img src=' + this.ad[i].x.image + ' alt="car" height="100" width="100" />' +
                                '</div>' +
                                '<div class="col-sm-8">' + // details
                                    this.ad[i].x.display() +
                                '</div>' +
                            '</div>' +
                            '<div class="panel-footer text-right"> <strong>Price: Rs. ' + this.ad[i].x.price + '/-</strong> </div>' + //price at footer
                        '</div>'; // creates new panel for car
    
                // setting 4 ads per page
                if(i<=3) {
                    document.getElementById("p1").innerHTML += this.a; // error araha hai cant read innerHTML of null :/
                }
                else if(i>=4 && i<=7) {
                    document.getElementById("p2").innerHTML += this.a;
                }
                else if(i>=8) {
                    document.getElementById("p3").innerHTML += this.a;
                }
                break;
            }
            case 'Mobiles' : {
                 this.a = '<div class="panel panel-primary">' +
                            '<div class="panel-heading">' +
                                '<h3 class="panel-title">' + //title
                                   this.ad[i].x.company + ' ' + this.ad[i].x.model +
                                '</h3>' +
                            '</div>' +
                            '<div class="panel-body row">'+
                                '<div class= "col-sm-4">' + //image
                                    '<img src=' + this.ad[i].x.image + ' alt="mobile" height="100" width="100" />' +
                                '</div>' +
                                '<div class="col-sm-8">' + // details
                                    this.ad[i].x.display() +
                                '</div>' +
                            '</div>' +
                            '<div class="panel-footer text-right"> <strong>Price: Rs. ' + this.ad[i].x.price + '/-</strong> </div>' + //price at footer
                        '</div>';  // creates new panel for mobile
                
                // setting 4 ads per page
                if(i<=3) {
                    document.getElementById("p1").innerHTML += this.a; // error araha hai cant read innerHTML of null :/
                }
                else if(i>=4 && i<=7) {
                    document.getElementById("p2").innerHTML += this.a;
                }
                else if(i>=8) {
                    document.getElementById("p3").innerHTML += this.a;
                }
                break;
            }
            default: {
                alert("Error!"); // yahan pohnchenge hi nhi hopefully
            }
        } // switch ends
    
        } // for-loop ends
    
    // display the Books tab
    let showBook : string;
    for(var i = 0; i < this.ad.length; i++) {
        let classDeterminator : string = this.ad[i].x.cName; // returns class name
        if(classDeterminator === "Books") {
            showBook = '<div class="panel panel-primary">' +
                                '<div class="panel-heading">' +
                                    '<h3 class="panel-title">' + //title
                                        this.ad[i].x.subject +
                                    '</h3>' +
                                '</div>' +
                                '<div class="panel-body row">'+
                                    '<div class= "col-sm-4">' + // image
                                        '<img src=' + this.ad[i].x.image + ' alt="book" height="100" width="100" />' +
                                    '</div>' +
                                    '<div class="col-sm-8">' + // details
                                        this.ad[i].x.display() +
                                    '</div>' +
                                '</div>' +
                                '<div class="panel-footer text-right"> <strong>Price: Rs. ' + this.ad[i].x.price + '/-</strong> </div>' +
                            '</div>'; // creating new panel with title and content for book
        
        document.getElementById("books").innerHTML += showBook;
       }
    }
    
    // display the Cars tab
    let showCar : string;
    for(var i = 0; i < this.ad.length; i++) {
        let classDeterminator : string = this.ad[i].x.cName; // returns class name
        if(classDeterminator === "Cars") {
            showCar = '<div class="panel panel-primary">' +
                                '<div class="panel-heading">' +
                                    '<h3 class="panel-title">' + //title
                                        this.ad[i].x.name +
                                    '</h3>' +
                                '</div>' +
                                '<div class="panel-body row">'+
                                    '<div class= "col-sm-4">' + //image
                                        '<img src=' + this.ad[i].x.image + ' alt="car" height="100" width="100" />' +
                                    '</div>' +
                                    '<div class="col-sm-8">' + // details
                                        this.ad[i].x.display() +
                                    '</div>' +
                                '</div>' +
                                '<div class="panel-footer text-right"> <strong>Price: Rs. ' + ad[i].x.price + '/-</strong> </div>' +
                            '</div>'; // creating new panel with title and content for car
    
            document.getElementById("cars").innerHTML += showCar;
        }
    }
    
    // display the Mobiles tab
    let showMobile : string;
    for(var i = 0; i < this.ad.length; i++) {
        let classDeterminator : string = this.ad[i].x.cName; // returns class name
        if(classDeterminator === "Mobiles") {
            showMobile ='<div class="panel panel-primary">' +
                                '<div class="panel-heading">' +
                                    '<h3 class="panel-title">' + //title
                                        this.ad[i].x.company + ' ' + this.ad[i].x.model +
                                    '</h3>' +
                                '</div>' +
                                '<div class="panel-body row">'+
                                    '<div class= "col-sm-4">' + //image
                                        '<img src=' + this.ad[i].x.image + ' alt="mobile" height="100" width="100" />' +
                                    '</div>' +
                                    '<div class="col-sm-8">' + // details
                                        this.ad[i].x.display() +
                                    '</div>' +
                                '</div>' +
                                '<div class="panel-footer text-right"> <strong>Price: Rs. ' + this.ad[i].x.price + '/-</strong> </div>' +
                            '</div>'; // creating new panel with title and content for mobile
    
            document.getElementById("mobiles").innerHTML += showMobile;
        }
        }
    */
    NavMenu.prototype.setScreen = function (id) {
        document.getElementById("screens").innerHTML = '<book></book>';
    };
    NavMenu = __decorate([
        core_1.Component({
            selector: 'navMenu',
            templateUrl: 'app.navMenu.html'
        })
    ], NavMenu);
    return NavMenu;
}());
exports.NavMenu = NavMenu;
