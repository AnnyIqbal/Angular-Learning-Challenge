import { Component } from '@angular/core';

export class Ads {
    cName : string;
    price: number;
    image: string;

    constructor(priceOfObject: number, imageOfObject: string) {
        this.price = priceOfObject;
        this.image = imageOfObject;
    }
}
export class Cars extends Ads {
    cName = "Cars";
    name : string;
    company : string;
    model : number;
    engine: number;
    color:string;

    constructor(nameOfCar: string, companyOfCar: string, modelOfCar: number, engineOfCar: number, colorOfCar: string, priceOfCar: number, img: string) {
        super(priceOfCar, img);
        this.name = nameOfCar;
        this.company = companyOfCar;
        this.model = modelOfCar;
        this.engine = engineOfCar;
        this.color = colorOfCar;
    }
}
@Component({
  selector: 'car',
  template: `<ul>
                 <li *ngFor="let item of ad">
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
    ad = [ // hard coded array for ad listings
        {x : new Cars("Corolla", "Toyota", 2016, 1500, "white", 540000, "app/Images/corolla.jpg")},
        {x : new Cars("CheryQQ", "Santro", 2016, 1000, "red", 205000, "app/Images/cheryqq.jpg")}
    ];
}
