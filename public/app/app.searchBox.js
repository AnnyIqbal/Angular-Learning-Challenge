"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var SearchBox = (function () {
    function SearchBox() {
        this.text = "Search";
    }
    SearchBox.prototype.clear = function (input) {
        input.value = '';
    };
    __decorate([
        core_1.Input('placeholder')
    ], SearchBox.prototype, "text");
    SearchBox = __decorate([
        core_1.Component({
            selector: 'searchBox',
            template: "<span> Search By Ad Title\n    <label for=\"search\" class=\"sr-only\"> Search by ad title </label>\n    <input type=\"text\" [placeholder]=\"'Search'\" id= \"search\" #input />\n    <button class=\"clear-btn\" (click)=\"clear(input)\">Clear </button>\n    </span>",
            styles: ["\n  h1 {\n    display: inline;\n  }\n  .clear-btn {\n    background-color: rgb(72, 95, 249);\n    color: white;\n    // width: 60px;\n    // height: 22px;\n  }\n  "]
        })
    ], SearchBox);
    return SearchBox;
}());
exports.SearchBox = SearchBox;
