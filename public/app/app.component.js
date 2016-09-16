"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_searchBox_1 = require('./app.searchBox');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.onSearch = function (text) {
        console.log("From App : " + text);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [app_searchBox_1.SearchBox],
            template: "<searchBox (search)=\"onSearch($event)\" text=\"Type Your Search Here\"></searchBox>"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
platform_browser_dynamic_1.bootstrap(AppComponent);
