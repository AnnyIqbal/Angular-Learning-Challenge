"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
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
