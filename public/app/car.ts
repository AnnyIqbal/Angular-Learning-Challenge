import { Component } from '@angular/core';
import {Ads, Cars, adsArray} from './app.navMenu';

@Component({
  selector: 'car',
  template: `<ul>
                 <li *ngFor="let item of adcr">
                <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3 class="panel-title"> {{item.x.name}} </h3>
                </div>
                <div class="panel-body row">
                    <div class= "col-sm-4">
                        <img src= {{item.x.image}} alt="car" height="100" width="100" />
                    </div>
                    <div class="col-sm-8">
                       <strong> Company: </strong> {{item.x.company}} <br />
                       <strong> Model: </strong> {{item.x.model}} <br />
                       <strong> Engine: </strong> {{item.x.engine}} cc <br />
                       <strong> Color: </strong>{{item.x.color}} 
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
export class DisplayCar{
    adcr = [ // hard coded array for ad listings
        {x : new Cars("Corolla", "Toyota", 2016, 1500, "white", 540000, "app/Images/corolla.jpg")},
        {x : new Cars("CheryQQ", "Santro", 2016, 1000, "red", 205000, "app/Images/cheryqq.jpg")}
    ];
}
