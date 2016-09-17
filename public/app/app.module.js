"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
//import { AppComponent }  from './app.component';
var app_searchBox_1 = require('./app.searchBox');
var app_header_1 = require('./app.header');
var app_navMenu_1 = require('./app.navMenu');
var book_1 = require('./book');
var mobile_1 = require('./mobile');
var car_1 = require('./car');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [app_header_1.Jumbotron, app_searchBox_1.SearchBox, app_navMenu_1.NavMenu, book_1.DisplayBook, mobile_1.DisplayMobile, car_1.DisplayCar],
            bootstrap: [app_header_1.Jumbotron, app_searchBox_1.SearchBox, app_navMenu_1.NavMenu, book_1.DisplayBook, mobile_1.DisplayMobile, car_1.DisplayCar] // AppComponent,
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
