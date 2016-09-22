import {Component, Input} from '@angular/core';
import {NgFor} from '@angular/common';
import {Ads, Books, Cars, Mobiles} from './adObjects';
import {AdService} from './ad.service';
import { ad } from './adArray'; //ad array imported
import {OneBook} from './oneBook';
import {OneCar} from './oneCar';
import {OneMobile} from './oneMobile';


//import {formInput} from './app.forminput';

@Component({
    selector: 'for',
    // template: `<div class="ui raised segment">
    //             <ul [ngSwitch]="choice">
    //                 <li *ngSwitchWhen="1">{{dom}} = <oneBook></oneBook> </li>
    //                 <li *ngSwitchWhen="2">{{dom}} = <oneCar></oneCar> </li>
    //                 <li *ngSwitchWhen="3">{{dom}} = <oneMobile></oneMobile> </li>
    //                 <li *ngSwitchDefault>{{dom}} = Select appropriate category </li>
    //             </ul>
    //         </div>`,
    // <ul>
    //         <li *ngFor="let item of ad">
    //         <div class="ui raised segment">
    //             <ul [ngSwitch]="choice">
    //                 <li *ngSwitchWhen="1">{{dom}} = <oneBook></oneBook> </li>
    //                 <li *ngSwitchWhen="2">{{dom}} = <oneCar></oneCar> </li>
    //                 <li *ngSwitchWhen="3">{{dom}} = <oneMobile></oneMobile> </li>
    //                 <li *ngSwitchDefault>{{dom}} = Select appropriate category </li>
    //             </ul>
    //         </div>
    //         </li>
    //         </ul>`,
    template: `<div class="panel panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title"> {{this.ad[0].x.subject}} </h3>
                        </div>
                        <div class="panel-body row">
                            <div class= "col-sm-4">
                                <img src={{this.ad[0].x.image}} alt="book" height="100" width="100" />
                            </div>
                            <div class="col-sm-8"> 
                                     <strong> Title: </strong> {{item.x.title}} <br />
                                     <strong> Author: </strong> {{item.x.author}} <br />
                                     <strong> Subject: </strong> {{item.x.subject}} 
                                 </div>
                        </div>
                        <div class="panel-footer text-right"> <strong>Price: Rs. {{this.ad[0].x.price}} /-</strong> </div>
                    </div>`,
    // `<div *ngIf="myAd"> {{dom}}="<oneBook></oneBook>"
                 
    //            </div>`,
    //            //{{displayAd()}}
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
//  dom : string = document.getElementById("p1").innerHTML;
//choice: number =1;
 //   @Input() myAd;

    ad : any[] = [ // hard coded array for ad listings
        {x : new Books("HTML & CSS", "Jon Duckett", "HTML & CSS", 200, "app/Images/htmlcss.png")},
        {x : new Books("Git Essentials", "Ferdinando Santacroce", "Git", 700, "app/Images/git.png")},
        {x : new Mobiles("J1-Ace", "Samsung", "white", 4.3, 19000, "app/Images/j1.jpg")},
        {x : new Books("A Smarter Way To Learn JavaScript", "Mark Mayers", "JavaScript", 500, "app/Images/js.png")},
        {x : new Cars("Vitz", "Toyota", 2017, 1200, "black", 500000, "app/Images/vitz.jpg")},
        {x : new Cars("Corolla", "Toyota", 2016, 1500, "white", 540000, "app/Images/corolla.jpg")},
        {x : new Cars("CheryQQ", "Santro", 2016, 1000, "red", 205000, "app/Images/cheryqq.jpg")},
        {x : new Mobiles("Noir S1", "Q-Mobile", "black", 5, 11000, "app/Images/S1.png")},
        {x : new Mobiles("E8-2", "htc", "black", 5, 27000, "app/Images/htc.jpg")}
    ]; // objects are pushed dynamically whenever a user posts ad

displayAd() {
     
  // display the All tab

// for (var i = 0; i < this.myAd.length; i++) {
//     let classDeterminator : string = this.myAd[i].x.cName; // returns class name 

//     switch(classDeterminator) { // use class name to check from which class the object belongs
//         case 'Books': {
//             // setting 4 ads per page
//             // if(i<=3) {
                 document.getElementById("p1").innerHTML += `<div class="panel panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title"> {{this.ad[0].x.subject}} </h3>
                        </div>
                        <div class="panel-body row">
                            <div class= "col-sm-4">
                                <img src={{this.ad[0].x.image}} alt="book" height="100" width="100" />
                            </div>
                            <div class="col-sm-8"> {{this.ad[0].x.display()}} </div>
                        </div>
                        <div class="panel-footer text-right"> <strong>Price: Rs. {{this.ad[0].x.price}} /-</strong> </div>
                    </div>`; // error araha hai cant read innerHTML of null :/
//             // }
//             // else if(i>=4 && i<=7) {
//             //     document.getElementById("p2").innerHTML += a;
//             // }
//             // else if(i>=8) {
//             //     document.getElementById("p3").innerHTML += a;
//             // }
//             break;
//         }
//         case 'Cars' : {
//             // setting 4 ads per page
//             // if(i<=3) {
//                  document.getElementById("p1").innerHTML += '<oneCar></oneCar>'; // error araha hai cant read innerHTML of null :/
//             // }
//             // else if(i>=4 && i<=7) {
//             //     document.getElementById("p2").innerHTML += a;
//             // }
//             // else if(i>=8) {
//             //     document.getElementById("p3").innerHTML += a;
//             // }
//             break;
//         }
//         case 'Mobiles' : {
//             // setting 4 ads per page
//             // if(i<=3) {
//                  document.getElementById("p1").innerHTML += '<oneMobile></oneMobile>'; // error araha hai cant read innerHTML of null :/
//             // }
//             // else if(i>=4 && i<=7) {
//             //     document.getElementById("p2").innerHTML += a;
//             // }
//             // else if(i>=8) {
//             //     document.getElementById("p3").innerHTML += a;
//             // }
//             break;
//         }
//         default: {
//             alert("Error!"); // yahan pohnchenge hi nhi hopefully
//         }
//     } // switch ends

//    } // for-loop ends

//     var bookArray = [];
//     if(item.x.cName === 'Books') {
//         bookArray.push(item);
//     }
 }

}