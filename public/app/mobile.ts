import { Component } from '@angular/core';
import {Ads, Mobiles, adsArray} from './app.navMenu';

@Component({
  selector: 'mobile',
  template: `<ul>
  <li  *ngFor="let item of admb">
  <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3 class="panel-title"> {{item.x.company }} {{item.x.model}} </h3>
                </div>
                <div class="panel-body row">
                    <div class= "col-sm-4">
                        <img src={{item.x.image}} alt="car" height="100" width="100" />
                    </div>
                    <div class="col-sm-8">
                        <strong> Model: </strong> {{item.x.model}} <br />
                        <strong> Company: </strong> {{item.x.company }} <br />
                        <strong> Color: </strong> {{item.x.color}} <br />
                        <strong> Screen Size: </strong> {{item.x.screenSize}}
                    </div>
                </div>
                <div class="panel-footer text-right"> <strong>Price: Rs. {{item.x.price}}/-</strong> </div>
            </div>
            </li>
            </ul>`,
    styles: [`
    li {
        list-style-type: none;
    }
    `]
})
export class DisplayMobile {
    admb = [ // hard coded array for ad listings
        {x : new Mobiles("J1-Ace", "Samsung", "white", 4.3, 19000, "app/Images/j1.jpg")},
        {x : new Mobiles("Noir S1", "Q-Mobile", "black", 5, 11000, "app/Images/S1.png")}
    ]; // objects are pushed dynamically whenever a user posts ad
} 