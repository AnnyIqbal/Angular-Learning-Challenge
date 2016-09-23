"use strict";
var adObjects_1 = require('./adObjects');
exports.ad = [
    { x: new adObjects_1.Books("HTML & CSS", "Jon Duckett", "HTML & CSS", 200, "app/Images/htmlcss.png") },
    { x: new adObjects_1.Books("Git Essentials", "Ferdinando Santacroce", "Git", 700, "app/Images/git.png") },
    { x: new adObjects_1.Mobiles("J1-Ace", "Samsung", "White", 4.3, 19000, "app/Images/j1.jpg") },
    { x: new adObjects_1.Books("A Smarter Way To Learn JavaScript", "Mark Mayers", "JavaScript", 500, "app/Images/js.png") },
    { x: new adObjects_1.Cars("Vitz", "Toyota", 2017, 1200, "Red", 500000, "app/Images/vitz.jpg") },
    { x: new adObjects_1.Cars("Corolla", "Toyota", 2016, 1500, "Blue", 540000, "app/Images/corolla.jpg") },
    { x: new adObjects_1.Cars("CheryQQ", "Santro", 2016, 1000, "White", 205000, "app/Images/cheryqq.jpg") },
    { x: new adObjects_1.Mobiles("Noir S1", "Q-Mobile", "Black", 5, 11000, "app/Images/S1.png") },
    { x: new adObjects_1.Mobiles("E8-2", "htc", "Black", 5, 27000, "app/Images/htc.jpg") }
]; // objects are pushed dynamically whenever a user posts ad
