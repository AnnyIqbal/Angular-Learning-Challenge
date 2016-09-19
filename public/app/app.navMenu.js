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
            template: "\n<!-- Navigation Tabs-->     \n        <div>\n            <ul class=\"nav nav-tabs\" role=\"tablist\">\n                <li role=\"presentation\" class=\"active\">\n                    <a href=\"#all\" aria-controls=\"all\" role=\"tab\" data-toggle=\"tab\">\n                        <img src=\"app/Images/all.png\" alt=\"all\" class=\"img-responsive center-block\" />\n                    </a>\n                </li>\n                <li role=\"presentation\" id=\"bTab\">\n                    <a href=\"#books\" aria-controls=\"books\" role=\"tab\" data-toggle=\"tab\">\n                        <img src=\"app/Images/b1.png\" alt=\"books\" class=\"img-responsive center-block\" />\n                    </a>\n                </li>\n                <li role=\"presentation\" id=\"cTab\">\n                    <a href=\"#cars\" aria-controls=\"cars\" role=\"tab\" data-toggle=\"tab\">\n                        <img src=\"app/Images/c6.png\" alt=\"cars\" class=\"img-responsive center-block\" />\n                    </a>\n                </li>\n                <li role=\"presentation\" id=\"mTab\">\n                    <a href=\"#mobiles\" aria-controls=\"mobiles\" role=\"tab\" data-toggle=\"tab\">\n                       <img src=\"app/Images/m1.png\" alt=\"mobiles\" class=\"img-responsive center-block\" />\n                    </a>\n                </li>\n                <li id=\"button\" role=\"presentation\">\n                    <a href=\"#form\" type=\"button\" aria-controls=\"form\" role=\"tab\" data-toggle=\"tab\" (click)=\"fieldsEmptied();\">\n                        <img [src]=\"postAd\" alt=\"Post Ad\" /> \n                    </a>\n                </li>\n            </ul>\n\n            <!--Tab Panes-->\n            <div class=\"tab-content\">\n                <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"all\">\n                    <div id=\"p1\">\n                        <h1> All Ads </h1>\n                    </div> \n                    <div id=\"p2\" class=\"hidden\">\n                        <h1> All Ads </h1>\n                    </div> \n                    <div id=\"p3\" class=\"hidden\">\n                        <h1> All Ads </h1>\n                    </div>                 \n                </div>\n                <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"books\">\n                    <h1> Books </h1>\n                </div>\n                <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"cars\">\n                    <h1> Cars </h1>\n                </div>\n                <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"mobiles\">\n                    <h1> Mobiles </h1>\n                </div>\n            </div>\n        </div>\n<!--/Navigation Tabs-->",
        }), 
        __metadata('design:paramtypes', [])
    ], NavMenu);
    return NavMenu;
}());
exports.NavMenu = NavMenu;
//# sourceMappingURL=app.navMenu.js.map