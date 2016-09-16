"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Jumbotron = (function () {
    function Jumbotron() {
    }
    Jumbotron = __decorate([
        core_1.Component({
            selector: 'header',
            template: "<!--Jumbotron from bootstrap-->\n            <div id=\"header\" class=\"jumbotron\"> \n                <br /><br /><br /><br /><br />\n                <h1>Classified App</h1>\n            </div>",
            styles: ["\nh1 {\n    text-transform: uppercase;\n    text-align: center;\n    vertical-align: baseline;\n    font-family: \"Old English Text\", Georgia, 'Times New Roman', Times, serif;\n    /*background-color: rgba(128,128,128,0.25);*/\n}\n.jumbotron {\n    background-image: url(\"Images/bg10.png\"); \n    background-size: 100% 100%; /* Image will stretch to cover entire content area */\n    background-repeat: no-repeat;\n    font-size: larger;\n    color: white;\n    /*border: 2px solid black;*/\n}\n"]
        })
    ], Jumbotron);
    return Jumbotron;
}());
exports.Jumbotron = Jumbotron;
