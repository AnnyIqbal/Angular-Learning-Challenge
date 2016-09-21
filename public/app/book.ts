import { Component } from '@angular/core';
import {Ads, Books, adsArray} from './app.navMenu';

@Component({
  selector: 'book',
  template: `<ul>
                    <li *ngFor="let item of adbk">
                    <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h3 class="panel-title"> 
                                    {{item.x.subject}} 
                                </h3>
                            </div>
                            <div class="panel-body row">
                                <div class= "col-sm-4">
                                    <img src={{item.x.image}} alt="book" height="100" width="100" /> 
                                </div>
                                <div class="col-sm-8"> 
                                    <strong> Title: </strong> {{item.x.title}} <br />
                                    <strong> Author: </strong> {{item.x.author}} <br />
                                    <strong> Subject: </strong> {{item.x.subject}} 
                                </div>
                            </div>
                            <div class="panel-footer text-right"> <strong>Price: Rs. {{item.x.price}} /-</strong> </div> 
                        </div>
                        </li>
               </ul>`,
// template: `<div class="panel panel-primary">
//                             <div class="panel-heading">
//                                 <h3 class="panel-title"> 
//                                     {{item.x.subject}} 
//                                 </h3>
//                             </div>
//                             <div class="panel-body row">
//                                 <div class= "col-sm-4">
//                                     <img src={{item.x.image}} alt="book" height="100" width="100" /> 
//                                 </div>
//                                 <div class="col-sm-8"> 
//                                     <strong> Title: </strong> {{item.x.title}} <br />
//                                     <strong> Author: </strong> {{item.x.author}} <br />
//                                     <strong> Subject: </strong> {{item.x.subject}} 
//                                 </div>
//                             </div>
//                             <div class="panel-footer text-right"> <strong>Price: Rs. {{item.x.price}} /-</strong> </div> 
//                         </div>`,
    styles: [`
    li {
        list-style-type: none;
    }
    `]
})
export class DisplayBook {
    adbk = [ // hard coded array for ad listings
    {x : new Books("HTML & CSS", "Jon Duckett", "HTML & CSS", 200, "app/Images/htmlcss.png")},
    {x : new Books("Git Essentials", "Ferdinando Santacroce", "Git", 700, "app/Images/git.png")}
]; // objects are pushed dynamically whenever a user posts ad

} 