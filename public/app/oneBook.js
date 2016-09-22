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
var OneBook = (function () {
    function OneBook() {
    }
    OneBook = __decorate([
        core_1.Component({
            selector: 'oneBook',
            template: "<div class=\"panel panel-primary\">\n                        <div class=\"panel-heading\">\n                            <h3 class=\"panel-title\"> {{this.ad[0].x.subject}} </h3>\n                        </div>\n                        <div class=\"panel-body row\">\n                            <div class= \"col-sm-4\">\n                                <img src={{this.ad[0].x.image}} alt=\"book\" height=\"100\" width=\"100\" />\n                            </div>\n                            <div class=\"col-sm-8\"> {{this.ad[0].x.display()}} </div>\n                        </div>\n                        <div class=\"panel-footer text-right\"> <strong>Price: Rs. {{this.ad[0].x.price}} /-</strong> </div>\n                    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], OneBook);
    return OneBook;
}());
exports.OneBook = OneBook;
//# sourceMappingURL=oneBook.js.map