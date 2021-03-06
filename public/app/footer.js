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
var Footer = (function () {
    function Footer() {
    }
    Footer = __decorate([
        core_1.Component({
            selector: 'footer-area',
            template: "<!-- footer area -->\n        <div id=\"footer\" class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <a href=\"https://annyportfolio.firebaseapp.com/\" data-toggle=\"Qurat ul Ann Iqbal\" target=\"_blank\"> About Developer </a> \n            </div>\n            <div class=\"col-sm-2\">\n                <a href=\"Javascript:void(0)\"> Terms & Conditions </a> \n            </div>\n            <div class=\"col-sm-2\">\n                <a href=\"Javascript:void(0)\"> Privacy Policy </a> \n            </div>\n            <div class=\"col-sm-4\">\n                <a href=\"Javascript:void(0)\"> All Rights Reserved, \u00A9 2016 </a>\n            </div>\n        </div> <!-- /.row -->\n        </div>\n        <br><br>",
            styles: ["\n        #footer div {\n            display: inline;\n        }\n"]
        }), 
        __metadata('design:paramtypes', [])
    ], Footer);
    return Footer;
}());
exports.Footer = Footer;
//# sourceMappingURL=footer.js.map