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
export class Mobiles extends Ads {
    cName = "Mobiles";
    model: string;
    company: string;
    color: string;
    screenSize: number;

    constructor(modelOfMobile: string, companyOfMobile: string, colorOfMobile: string, screenSizeOfMobile: number, priceOfMobile: number, img: string) {
        super(priceOfMobile, img);
        this.model = modelOfMobile;
        this.company = companyOfMobile;
        this.color = colorOfMobile;
        this.screenSize = screenSizeOfMobile;
        this.price = priceOfMobile;
        this.image = img;
    }
}
@Component({
  selector: 'mobile',
  template: `<div class="panel panel-primary">
                <div class="panel-heading">
                    <h3 class="panel-title"> {{this.ad[0].x.company }} {{this.ad[0].x.model}} </h3>
                </div>
                <div class="panel-body row">
                    <div class= "col-sm-4">
                        <img src={{this.ad[0].x.image}} alt="car" height="100" width="100" />
                    </div>
                    <div class="col-sm-8">
                        <strong> Model: </strong> {{this.ad[0].x.model}} <br />
                        <strong> Company: </strong> {{this.ad[0].x.company }} <br />
                        <strong> Color: </strong> {{this.ad[0].x.color}} <br />
                        <strong> Screen Size: </strong> {{this.ad[0].x.screenSize}}
                    </div>
                </div>
                <div class="panel-footer text-right"> <strong>Price: Rs. {{this.ad[0].x.price}}/-</strong> </div>
            </div>`
})
export class DisplayMobile {
    ad = [ // hard coded array for ad listings
        {x : new Mobiles("J1-Ace", "Samsung", "white", 4.3, 19000, "app/Images/j1.jpg")},
        {x : new Mobiles("Noir S1", "Q-Mobile", "black", 5, 11000, "app/Images/S1.png")}
    ]; // objects are pushed dynamically whenever a user posts ad
} 