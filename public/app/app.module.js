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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var app_searchBox_1 = require('./app.searchBox');
var app_header_1 = require('./app.header');
var app_navMenu_1 = require('./app.navMenu');
var book_1 = require('./book');
var mobile_1 = require('./mobile');
var car_1 = require('./car');
var app_forminput_1 = require('./app.forminput');
var forloop_1 = require('./forloop');
//import {SignIn} from './signin'; thori der k lie band kia hai kholna na bhoolna
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [
                app_component_1.AppComponent, app_header_1.Jumbotron, app_searchBox_1.SearchBox, app_navMenu_1.NavMenu, book_1.DisplayBook, mobile_1.DisplayMobile, car_1.DisplayCar, app_forminput_1.formInput, forloop_1.Loop
            ],
            bootstrap: [
                app_component_1.AppComponent, app_header_1.Jumbotron, app_searchBox_1.SearchBox, app_navMenu_1.NavMenu, book_1.DisplayBook, mobile_1.DisplayMobile, car_1.DisplayCar, app_forminput_1.formInput, forloop_1.Loop
            ] //, SignIn
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map