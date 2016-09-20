import {Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {Ads, Books, Cars, Mobiles} from './app.navMenu';

@Component({
    selector: 'for',
    template: '{{displayAd()}}',
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

displayAd() {
  // display the All tab
let a: string;

for (var i = 0; i < this.ad.length; i++) {
    let classDeterminator : string = this.ad[i].x.cName; // returns class name 

    switch(classDeterminator) { // use class name to check from which class the object belongs
        case 'Books': {
            a = '<div class="panel panel-primary">' +
                        '<div class="panel-heading">' +
                            '<h3 class="panel-title">' + //title
                                this.ad[i].x.subject + 
                            '</h3>' +
                        '</div>' +
                        '<div class="panel-body row">'+
                            '<div class= "col-sm-4">' + //image
                                '<img src=' + this.ad[i].x.image + ' alt="book" height="100" width="100" />' +
                            '</div>' +
                            '<div class="col-sm-8">' + // details
                                this.ad[i].x.display() +
                            '</div>' +
                        '</div>' +
                        '<div class="panel-footer text-right"> <strong>Price: Rs. ' + this.ad[i].x.price + '/-</strong> </div>' + //price at footer
                    '</div>'; // creates new panel for book
      
            // setting 4 ads per page
            if(i<=3) {
                document.getElementById("p1").innerHTML += a; // error araha hai cant read innerHTML of null :/
            }
            else if(i>=4 && i<=7) {
                document.getElementById("p2").innerHTML += a;
            }
            else if(i>=8) {
                document.getElementById("p3").innerHTML += a;
            }
            break;
        }
        case 'Cars' : {
            a = '<div class="panel panel-primary">' +
                        '<div class="panel-heading">' +
                            '<h3 class="panel-title">' + //title
                                this.ad[i].x.name +
                            '</h3>' +
                        '</div>' +
                        '<div class="panel-body row">'+
                            '<div class= "col-sm-4">' + //image
                                '<img src=' + this.ad[i].x.image + ' alt="car" height="100" width="100" />' +
                            '</div>' +
                            '<div class="col-sm-8">' + // details
                                this.ad[i].x.display() +
                            '</div>' +
                        '</div>' +
                        '<div class="panel-footer text-right"> <strong>Price: Rs. ' + this.ad[i].x.price + '/-</strong> </div>' + //price at footer
                    '</div>'; // creates new panel for car

            // setting 4 ads per page
            if(i<=3) {
                document.getElementById("p1").innerHTML += a; // error araha hai cant read innerHTML of null :/
            }
            else if(i>=4 && i<=7) {
                document.getElementById("p2").innerHTML += a;
            }
            else if(i>=8) {
                document.getElementById("p3").innerHTML += a;
            }
            break;
        }
        case 'Mobiles' : {
             a = '<div class="panel panel-primary">' +
                        '<div class="panel-heading">' +
                            '<h3 class="panel-title">' + //title
                                this.ad[i].x.company + ' ' + this.ad[i].x.model +
                            '</h3>' +
                        '</div>' +
                        '<div class="panel-body row">'+
                            '<div class= "col-sm-4">' + //image
                                '<img src=' + this.ad[i].x.image + ' alt="mobile" height="100" width="100" />' +
                            '</div>' +
                            '<div class="col-sm-8">' + // details
                                this.ad[i].x.display() +
                            '</div>' +
                        '</div>' +
                        '<div class="panel-footer text-right"> <strong>Price: Rs. ' + this.ad[i].x.price + '/-</strong> </div>' + //price at footer
                    '</div>';  // creates new panel for mobile
            
            // setting 4 ads per page
            if(i<=3) {
                document.getElementById("p1").innerHTML += a; // error araha hai cant read innerHTML of null :/
            }
            else if(i>=4 && i<=7) {
                document.getElementById("p2").innerHTML += a;
            }
            else if(i>=8) {
                document.getElementById("p3").innerHTML += a;
            }
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