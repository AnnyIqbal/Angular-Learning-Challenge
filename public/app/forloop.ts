import {Component} from '@angular/core';
import {NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import {Books, Cars, Mobiles} from './adObjects';

@Component({
    selector: 'for',
    template: `
    <ul>
        <li *ngFor="let item of ad">
            <ul [ngSwitch]="item.x.cName">
               <li *ngSwitchCase="'Books'">
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title"> {{item.x.subject}} </h3>
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
               <li *ngSwitchCase="'Cars'">
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
        <li *ngSwitchCase="'Mobiles'">
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
        <li *ngSwitchDefault>Default choice</li>
    </ul>
  </li>
</ul>
            `,
    styles: [`
    li {
        list-style-type: none;
    }
    `]
})
export class Loop { 
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
    ]; 
}