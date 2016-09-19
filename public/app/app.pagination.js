"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Pagination = (function () {
    function Pagination() {
    }
    Pagination.prototype.activatePage = function (id, tag) {
        switch (id) {
            case 'p1': {
                tag.parentElement.setAttribute("class", "active"); // set .active for #p1
                tag.parentElement.nextElementSibling.removeAttribute("class"); // remove .active from #p2
                tag.parentElement.nextElementSibling.nextElementSibling.removeAttribute("class"); // remove .active from #p3
                document.getElementById(id).className = "show"; // set .show for #p1
                document.getElementById("p2").className = "hidden"; //hide #p2
                document.getElementById("p3").className = "hidden"; //hide #p3
                break;
            }
            case 'p2': {
                tag.parentElement.setAttribute("class", "active"); // set .active for #p2
                tag.parentElement.nextElementSibling.removeAttribute("class"); // remove .active from #p3
                tag.parentElement.previousElementSibling.removeAttribute("class"); // remove .active from #p1
                document.getElementById(id).className = "show"; // set .show for #p2
                document.getElementById("p1").className = "hidden"; //hide #p1
                document.getElementById("p3").className = "hidden"; //hide #p3
                break;
            }
            case 'p3': {
                tag.parentElement.setAttribute("class", "active"); // set .active for #p3
                tag.parentElement.previousElementSibling.removeAttribute("class"); // remove .active from #p2
                tag.parentElement.previousElementSibling.previousElementSibling.removeAttribute("class"); // remove .active from #p3
                document.getElementById(id).className = "show"; // set .show for #p3
                document.getElementById("p1").className = "hidden"; //hide #p1
                document.getElementById("p2").className = "hidden"; //hide #p2
                break;
            }
            default: {
                alert("Error!");
            }
        }
    };
    Pagination = __decorate([
        core_1.Component({
            selector: 'pagination',
            template: "<nav aria-label=\"Page navigation\"> <!-- pagination list -->\n                        <ul class=\"pagination\">\n                            <!--<li><span><span aria-hidden=\"true\">&laquo;</span></span></li>-->\n                            <li class=\"active\"><a href=\"#p1\" (click)=\"activatePage('p1', this);\">1</a></li>\n                            <li><a href=\"#p2\" (click)=\"activatePage('p2', this);\">2</a></li>\n                            <li><a href=\"#p3\" (click)=\"activatePage('p3', this);\">3</a></li>\n                            <!--<li><span><span aria-hidden=\"true\">&raquo;</span></span></li>-->\n                        </ul>\n                    </nav> <!-- /pagination list -->"
        })
    ], Pagination);
    return Pagination;
}());
exports.Pagination = Pagination;
