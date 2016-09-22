import {Component, Input} from '@angular/core';
import {NgFor} from '@angular/common';
import {Ads, Books, Cars, Mobiles} from './adObjects';
import {AdService} from './ad.service';
//import {formInput} from './app.forminput';

@Component({
    selector: 'for',
    template: `<div *ngIf="myAd">
                 {{displayAd()}}
               </div>`,
    // template: `<ul>
    //                 <li *ngFor="let item of ad"> 
    //                     {{displayAd(item)}} 
    //                 </li>
    //            </ul>`,
    styles: [`
    li {
        list-style-type: none;
    }
    `]
})
export class Loop { 

    @Input() myAd:any[];

    // ad : any[] = [ // hard coded array for ad listings
    //     {x : new Books("HTML & CSS", "Jon Duckett", "HTML & CSS", 200, "app/Images/htmlcss.png")},
    //     {x : new Books("Git Essentials", "Ferdinando Santacroce", "Git", 700, "app/Images/git.png")},
    //     {x : new Mobiles("J1-Ace", "Samsung", "white", 4.3, 19000, "app/Images/j1.jpg")},
    //     {x : new Books("A Smarter Way To Learn JavaScript", "Mark Mayers", "JavaScript", 500, "app/Images/js.png")},
    //     {x : new Cars("Vitz", "Toyota", 2017, 1200, "black", 500000, "app/Images/vitz.jpg")},
    //     {x : new Cars("Corolla", "Toyota", 2016, 1500, "white", 540000, "app/Images/corolla.jpg")},
    //     {x : new Cars("CheryQQ", "Santro", 2016, 1000, "red", 205000, "app/Images/cheryqq.jpg")},
    //     {x : new Mobiles("Noir S1", "Q-Mobile", "black", 5, 11000, "app/Images/S1.png")},
    //     {x : new Mobiles("E8-2", "htc", "black", 5, 27000, "app/Images/htc.jpg")}
    // ]; // objects are pushed dynamically whenever a user posts ad

displayAd() {
  // display the All tab
let a: string;

for (var i = 0; i < this.myAd.length; i++) {
    let classDeterminator : string = this.myAd[i].x.cName; // returns class name 

    switch(classDeterminator) { // use class name to check from which class the object belongs
        case 'Books': {
            a = `<div class="panel panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title"> {{this.myAd.x.subject}} </h3>
                        </div>
                        <div class="panel-body row">
                            <div class= "col-sm-4">
                                <img src={{this.myAd.x.image}} alt="book" height="100" width="100" />
                            </div>
                            <div class="col-sm-8"> {{this.myAd.x.display()}} </div>
                        </div>
                        <div class="panel-footer text-right"> <strong>Price: Rs. {{this.myAd.x.price}} /-</strong> </div>
                    </div>`; // creates new panel for book
      
            // setting 4 ads per page
            // if(i<=3) {
                 document.getElementById("p1").innerHTML += a; // error araha hai cant read innerHTML of null :/
            // }
            // else if(i>=4 && i<=7) {
            //     document.getElementById("p2").innerHTML += a;
            // }
            // else if(i>=8) {
            //     document.getElementById("p3").innerHTML += a;
            // }
            break;
        }
        case 'Cars' : {
            a = `<div class="panel panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title"> {{this.myAd.x.name}} </h3>
                        </div>
                        <div class="panel-body row">
                            <div class= "col-sm-4">
                                <img src={{this.myAd.x.image}} alt="car" height="100" width="100" />
                            </div>
                            <div class="col-sm-8"> {{this.myAd.x.display()}} </div>
                        </div>
                        <div class="panel-footer text-right"> <strong>Price: Rs. {{this.myAd.x.price}}/-</strong> </div>
                    </div>`; // creates new panel for car

            // setting 4 ads per page
            // if(i<=3) {
                 document.getElementById("p1").innerHTML += a; // error araha hai cant read innerHTML of null :/
            // }
            // else if(i>=4 && i<=7) {
            //     document.getElementById("p2").innerHTML += a;
            // }
            // else if(i>=8) {
            //     document.getElementById("p3").innerHTML += a;
            // }
            break;
        }
        case 'Mobiles' : {
             a = `<div class="panel panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title"> {{this.myAd.x.company}} {{this.myAd.x.model}} </h3>
                        </div>
                        <div class="panel-body row">
                            <div class= "col-sm-4">
                                <img src={{this.myAd.x.image}} alt="mobile" height="100" width="100" />
                            </div>
                            <div class="col-sm-8"> {{this.myAd.x.display()}} </div>
                        </div>
                        <div class="panel-footer text-right"> <strong>Price: Rs.{{this.myAd.x.price}} /-</strong> </div>
                    </div>`;  // creates new panel for mobile
            
            // setting 4 ads per page
            // if(i<=3) {
                 document.getElementById("p1").innerHTML += a; // error araha hai cant read innerHTML of null :/
            // }
            // else if(i>=4 && i<=7) {
            //     document.getElementById("p2").innerHTML += a;
            // }
            // else if(i>=8) {
            //     document.getElementById("p3").innerHTML += a;
            // }
            break;
        }
        default: {
            alert("Error!"); // yahan pohnchenge hi nhi hopefully
        }
    } // switch ends

   } // for-loop ends

//     var bookArray = [];
//     if(item.x.cName === 'Books') {
//         bookArray.push(item);
//     }
 }

}