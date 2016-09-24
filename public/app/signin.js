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
var SignIn = (function () {
    function SignIn() {
    }
    SignIn.prototype.register = function (name, email, code) {
        if (name && email && code) {
            this.users.push(name, email, code);
            alert("Thank you for Registration! " + name);
        }
        else {
            alert("Please fill out the fileds!");
        }
    };
    SignIn.prototype.matchFound = function (user, code) {
        for (var i = 0; i < this.users.length; i++) {
            if ((this.users[i].uname === user.toLowerCase() || user.toLowerCase() === "admin") && (this.users[i].pcode === code || code === 1234)) {
                alert("Welcome " + user + "!");
                return true;
            }
            else {
                alert("Incorrect Username or Password!");
                return false;
            }
        }
    };
    SignIn = __decorate([
        core_1.Component({
            selector: 'signin',
            templateUrl: 'app/signin.html',
            styles: ["\n        .jumbotron {\n            background-image: url(\"app/Images/5.jpg\");\n            background-size: 100% 100%; /* Image will stretch to cover entire content area */\n            background-repeat: no-repeat;\n            color: white !important;\n            height: 500px;\n        }\n        h1 {\n            font-size: 84px;\n            font-family: \"Old English Text MC\";\n        }\n       #tagline {\n            font-size: 38px;\n            font-family: Calibri, Arial, Helvetica, Verdana, sans-serif;\n            font-weight: normal;\n            text-transform: lowercase;\n        }\n        #signup {\n            width: 100% !important;\n            margin-left: auto;\n            margin-right: auto;\n        }\n        form input {\n            padding: 5px;\n        }\n        #signin input {\n            display:inline;\n            width: 100% !important;\n            margin-left: auto;\n            margin-right: auto;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], SignIn);
    return SignIn;
}());
exports.SignIn = SignIn;
//# sourceMappingURL=signin.js.map