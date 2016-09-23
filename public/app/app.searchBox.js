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
var adArray_1 = require('./adArray'); //ad array imported
var SearchBox = (function () {
    function SearchBox() {
        this.text = "Search Here";
    }
    SearchBox.prototype.search = function (searchWord) {
        var searchResults;
        for (var i = 0; i < adArray_1.ad.length; i++) {
            for (var key in adArray_1.ad[i].x) {
                if (adArray_1.ad[i].x.hasOwnProperty(key)) {
                    if ((searchWord.toLowerCase() === key.toLowerCase()) || (searchWord.toLowerCase() === adArray_1.ad[i].x.cName.toLowerCase())) {
                        switch (adArray_1.ad[i].x.cName) {
                            case "Books": {
                                alert(adArray_1.ad[i].x[key]); //values eg git
                                document.getElementById("search").innerHTML = "<div class=\"panel panel-primary\">\n                            <div class=\"panel-heading\">\n                                <h3 class=\"panel-title\"> \n                                    {{this.ad[i].x.subject }}\n                                </h3>\n                            </div>\n                            <div class=\"panel-body row\">\n                                <div class= \"col-sm-4\">\n                                    <img src={{key.image}} alt=\"book\" height=\"100\" width=\"100\" /> \n                                </div>\n                                <div class=\"col-sm-8\"> \n                                    <strong> Title: </strong> {{key.title}} <br />\n                                    <strong> Author: </strong> {{key.author}} <br />\n                                    <strong> Subject: </strong> {{key.subject}} \n                                </div>\n                            </div>\n                            <div class=\"panel-footer text-right\"> <strong>Price: Rs. {{key.price}} /-</strong> </div> \n                        </div>\n                    "; //display the books
                                break;
                            }
                            case "Cars": {
                                alert(adArray_1.ad[i].x[key]);
                                // document.getElementById("p1").className = "tab-pane fade";
                                // document.getElementById("books").className = "tab-pane fade";
                                // document.getElementById("mobiles").className = "tab-pane fade";
                                // document.getElementById("cars").className ="tab-pane fade in active";
                                // document.getElementById("aTab").className = ''; //removing active class
                                // document.getElementById("cTab").className = 'active'; //activating the cars tab
                                document.getElementById("search").innerHTML = '<car></car>'; //display cars array
                                break;
                            }
                            case "Mobiles": {
                                alert(adArray_1.ad[i].x[key]);
                                // document.getElementById("p1").className = "tab-pane fade";
                                // document.getElementById("books").className = "tab-pane fade";
                                // document.getElementById("cars").className = "tab-pane fade";
                                // document.getElementById("mobiles").className ="tab-pane fade in active";
                                // document.getElementById("aTab").className = ''; //removing active class
                                // document.getElementById("mTab").className = 'active'; //activating the mobiles tab
                                document.getElementById("search").innerHTML = '<mobile></mobile>'; //display mobiles array
                                break;
                            }
                            default: {
                                alert("You searched for: " + searchWord + "<br> Match not Found!"); //unreachable it seems
                            }
                        } // switch ends
                    } // inner-if ends
                } //outer-if ends
            } // inner-for ends
        } //outer for ends
    }; // search() ends
    __decorate([
        core_1.Input('placeholder'), 
        __metadata('design:type', String)
    ], SearchBox.prototype, "text", void 0);
    SearchBox = __decorate([
        core_1.Component({
            selector: 'searchBox',
            template: "\n    <span>\n      <label for=\"input\" class=\"sr-only\"> Search Ads Here </label>\n      <input type=\"search\" [placeholder]=\"'Search'\" #input (keydown.enter) = \"search(input.value)\" />\n      <button class=\"search-btn btn btn-primary\" (click)=\"search(input.value)\"> Search </button>\n    </span>\n    <br /><br />\n    ",
            styles: ["\n  span {\n    font-family: Comic-sans, serif;\n  }\n  .search-btn {\n    background-color: rgb(72, 95, 249);\n    color: white;\n  }\n  input {\n    width: 50%;\n    padding: 5px;\n  }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchBox);
    return SearchBox;
}());
exports.SearchBox = SearchBox;
//# sourceMappingURL=app.searchBox.js.map