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
        for (var i = 0; i < adArray_1.ad.length; i++) {
            for (var key in adArray_1.ad[i].x) {
                if (adArray_1.ad[i].x.hasOwnProperty(key)) {
                    if ((searchWord.toLowerCase() === key) || (searchWord.toLowerCase() === adArray_1.ad[i].x[key]) || (searchWord.toLowerCase() === adArray_1.ad[i].x.cName.toLowerCase())) {
                        // document.getElementsByClassName("tab-pane fade in active")[0].className = "tab-pane fade"; //jo b active hai naavMenu use fade krdo
                        // document.getElementById(ad[i].x.cName.toLowerCase()).className = "tab-pane fade in active"; //searched category ki navmenu ko active krdo
                        switch (adArray_1.ad[i].x.cName) {
                            case "Books": {
                                alert(adArray_1.ad[i].x[key]);
                                document.getElementById("p1").className = "tab-pane fade";
                                document.getElementById("books").className = "tab-pane fade in active";
                                document.getElementById("aTab").className = ''; //removing active class
                                document.getElementById("bTab").className = 'active'; //activating the books tab;
                                document.getElementById("p1").innerHTML = '<book></book>'; //display books array
                                break;
                            }
                            case "Cars": {
                                alert(adArray_1.ad[i].x[key]);
                                document.getElementById("p1").className = "tab-pane fade";
                                document.getElementById("cars").className = "tab-pane fade in active";
                                document.getElementById("aTab").className = ''; //removing active class
                                document.getElementById("cTab").className = 'active'; //activating the cars tab
                                document.getElementById("p1").innerHTML = '<car></car>'; //display cars array
                                break;
                            }
                            case "Mobiles": {
                                alert(adArray_1.ad[i].x[key]);
                                document.getElementById("p1").className = "tab-pane fade";
                                document.getElementById("mobiles").className = "tab-pane fade in active";
                                document.getElementById("aTab").className = ''; //removing active class
                                document.getElementById("mTab").className = 'active'; //activating the mobiles tab
                                document.getElementById("p1").innerHTML = '<mobile></mobile>'; //display mobiles array
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
        if (matched === false) {
            alert("You searched for '" + searchWord + "' : Match not Found!");
        }
    }; // search() ends
    __decorate([
        core_1.Input('placeholder'), 
        __metadata('design:type', String)
    ], SearchBox.prototype, "text", void 0);
    SearchBox = __decorate([
        core_1.Component({
            selector: 'searchBox',
            template: "\n    <span>\n      <label for=\"input\" class=\"sr-only\"> Search Ads Here </label>\n      <input type=\"search\" [placeholder]=\"'Search'\" #input (keydown.enter) = \"search(input.value)\" />\n      <button class=\"search-btn\" (click)=\"search(input.value)\"> Search </button>\n    </span>\n    <br /><br />\n    ",
            styles: ["\n  span {\n    font-family: Comic-sans, serif;\n  }\n  .search-btn {\n    background-color: rgb(72, 95, 249);\n    color: white;\n  }\n  input {\n    width: 50%;\n  }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchBox);
    return SearchBox;
}());
exports.SearchBox = SearchBox;
//# sourceMappingURL=app.searchBox.js.map