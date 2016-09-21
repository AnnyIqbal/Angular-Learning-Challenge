"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var adObjects_1 = require('./adObjects');
var formInput = (function () {
    function formInput() {
        this.myAd = ad;
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
    formInput.prototype.checkCategory = function () {
        var cat = document.getElementById("category").value; // type casting string into HTMLInputElement
        switch (cat) {
            case 'book': {
                document.getElementById("book").className = "show";
                document.getElementById("car").className = "hidden";
                document.getElementById("mobile").className = "hidden";
                break;
            }
            case 'car': {
                document.getElementById("car").className = "show";
                document.getElementById("book").className = "hidden";
                document.getElementById("mobile").className = "hidden";
                break;
            }
            case 'mobile': {
                document.getElementById("mobile").className = "show";
                document.getElementById("book").className = "hidden";
                document.getElementById("car").className = "hidden";
                break;
            }
            default: {
                document.getElementById("category").focus();
            }
        }
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
                ad.push({ x: new adObjects_1.Books(title, author, subject, price, src) }); // passing specific url for image upload, img must be at that location
                document.getElementById("books").className = "tab-pane fade in active"; // activate books tab
                document.getElementById("form").className = "tab-pane fade"; // deactivate form tab  
                // display it in the All & Books tab
                var showBook = void 0, lastIndex = ad.length - 1;
                showBook = '<div class="panel panel-primary">' +
                    '<div class="panel-heading">' +
                    '<h3 class="panel-title">' +
                    ad[lastIndex].x.subject +
                    '</h3>' +
                    '</div>' +
                    '<div class="panel-body row">' +
                    '<div class= "col-sm-4">' +
                    '<img src=' + ad[lastIndex].x.image + ' alt="book" height="100" width="100" />' +
                    '</div>' +
                    '<div class="col-sm-8">' +
                    ad[lastIndex].x.display() +
                    '</div>' +
                    '</div>' +
                    '<div class="panel-footer text-right"> <strong>Price: Rs. ' + ad[lastIndex].x.price + '/-</strong> </div>' +
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
                ad.push({ x: new adObjects_1.Cars(name_1, company, model, engine, color, price, src) });
                document.getElementById("cars").className = "tab-pane fade in active"; // activate cars tab
                document.getElementById("form").className = "tab-pane fade"; // deactivate form tab  
                // display it in the All & Cars tab
                var showCar = void 0, lastIndex = ad.length - 1;
                showCar = '<div class="panel panel-primary">' +
                    '<div class="panel-heading">' +
                    '<h3 class="panel-title">' +
                    ad[lastIndex].x.name +
                    '</h3>' +
                    '</div>' +
                    '<div class="panel-body row">' +
                    '<div class= "col-sm-4">' +
                    '<img src=' + ad[lastIndex].x.image + ' alt="car" height="100" width="100" />' +
                    '</div>' +
                    '<div class="col-sm-8">' +
                    ad[lastIndex].x.display() +
                    '</div>' +
                    '</div>' +
                    '<div class="panel-footer text-right"> <strong>Price: Rs. ' + ad[lastIndex].x.price + '/-</strong> </div>' +
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
                ad.push({ x: new adObjects_1.Mobiles(model, company, color, screenSize, price, src) });
                document.getElementById("mobiles").className = "tab-pane fade in active"; // activate mobiles tab
                document.getElementById("form").className = "tab-pane fade"; // deactivate form tab  
                // display it in the All & Mobiles tab
                var showMobile = void 0, lastIndex = ad.length - 1;
                showMobile = '<div class="panel panel-primary">' +
                    '<div class="panel-heading">' +
                    '<h3 class="panel-title">' +
                    ad[lastIndex].x.company + ' ' + ad[lastIndex].x.model +
                    '</h3>' +
                    '</div>' +
                    '<div class="panel-body row">' +
                    '<div class= "col-sm-4">' +
                    '<img src=' + ad[lastIndex].x.image + ' alt="mobile" height="100" width="100" />' +
                    '</div>' +
                    '<div class="col-sm-8">' +
                    ad[lastIndex].x.display() +
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
            templateUrl: 'app/app.formInput.html'
        })
    ], formInput);
    return formInput;
}());
exports.formInput = formInput;
