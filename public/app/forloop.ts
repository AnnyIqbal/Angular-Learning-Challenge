import {Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {Ads, Books, Cars, Mobiles} from './app.navMenu';
import {allAds} from './allads';

@Component({
    selector: 'for',
    template: `<ul>
                    <li *ngFor="let item of ad"> {{displayCorrectObject(item)}} </li>
               </ul>`,
    styles: [`
    li {
        list-style-type: none;
    }
    `]
})
export class Loop { 
    
    ad : any[] = [ // hard coded array for ad listings
    {x : new Books("HTML & CSS", "Jon Duckett", "HTML & CSS", 200, "Images/htmlcss.png")},
    {x : new Books("Git Essentials", "Ferdinando Santacroce", "Git", 700, "Images/git.png")},
    {x : new Mobiles("J1-Ace", "Samsung", "white", 4.3, 19000, "Images/j1.jpg")},
    {x : new Books("A Smarter Way To Learn JavaScript", "Mark Mayers", "JavaScript", 500, "Images/js.png")},
    {x : new Cars("Vitz", "Toyota", 2017, 1200, "black", 500000, "Images/vitz.jpg")},
    {x : new Cars("Corolla", "Toyota", 2016, 1500, "white", 540000, "Images/corolla.jpg")},
    {x : new Cars("CheryQQ", "Santro", 2016, 1000, "red", 205000, "Images/cheryqq.jpg")},
    {x : new Mobiles("Noir S1", "Q-Mobile", "black", 5, 11000, "Images/S1.png")},
    {x : new Mobiles("E8-2", "htc", "black", 5, 27000, "Images/htc.jpg")}
]; // objects are pushed dynamically whenever a user posts ad

displayCorrectObject(item) {
    // let z: boolean; 
    // if(item.x.cName === 'Cars') {
    //     z=true;
    // }
    // else {
    //     z=false;
    // }

    
    // console.log(z);
    //document.getElementById("all").innerHTML += 'item.x.display()';
    switch(item.x.cName) {
        case 'Books': {
            document.getElementById("all").innerHTML += '<book></book>';
        }
         case 'Cars': {
            document.getElementById("p1").innerHTML += '<car></car>';
        }
         case 'Mobiles': {
            document.getElementById("p1").innerHTML += '<mobile></mobile>';
        }
        // default: {
        //     alert("Error!"); // yahan pohnchenge hi nhi hopefully
        // }
    }
//     var bookArray = [];
//     if(item.x.cName === 'Books') {
//         bookArray.push(item);
//         document.getElementById("all").innerHTML += '<book></book>';
//         //item.x.display();
//         //'<book></book>'; // book k tag se loop hatana hoga agr ye thek chal gya to
//     }
//     else if(item.x.cName === 'Cars') {
//         document.getElementById("all").innerHTML += '<car></car>';
//     }
//     else if(item.x.cName === 'Mobiles') {
//         document.getElementById("all").innerHTML += '<mobile></mobile>';
//     }
 }

}