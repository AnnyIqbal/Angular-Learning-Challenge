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
var Pagination = (function () {
    function Pagination() {
    }
    Pagination = __decorate([
        core_1.Component({
            selector: 'pagination',
            template: "<nav aria-label=\"Page navigation\"> <!-- pagination list -->\n                        <ul class=\"pagination\">\n                            <!--<li><span><span aria-hidden=\"true\">&laquo;</span></span></li>-->\n                            <li class=\"active\"><a href=\"#p1\" onclick=\"activatePage('p1', this);\">1</a></li>\n                            <li><a href=\"#p2\" onclick=\"activatePage('p2', this);\">2</a></li>\n                            <li><a href=\"#p3\" onclick=\"activatePage('p3', this);\">3</a></li>\n                            <!--<li><span><span aria-hidden=\"true\">&raquo;</span></span></li>-->\n                        </ul>\n                    </nav> <!-- /pagination list -->"
        }), 
        __metadata('design:paramtypes', [])
    ], Pagination);
    return Pagination;
}());
exports.Pagination = Pagination;
//# sourceMappingURL=app.pagination.js.map