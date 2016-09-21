import { Component, Input } from '@angular/core';
import {NgFor} from '@angular/common';

export class Ads {
    cName : string;
    price: number;
    image: string;

    constructor(priceOfObject: number, imageOfObject: string) {
        this.price = priceOfObject;
        this.image = imageOfObject;
    }
}

export class Books extends Ads{ 
    cName = "Books";
    title : string;
    author : string;
    subject : string;
    img : string = "Images/b1.png";
    
    // constructor automatically assigns the argument values to class attributes whenever a new instance is generated
    constructor(titleOfBook: string, authorOfBook: string, subjectOfBook: string, priceOfBook: number, imgOfBook?: string) {
        super(priceOfBook, imgOfBook);
        this.title = titleOfBook;
        this.author = authorOfBook;
        this.subject = subjectOfBook;
    }

    display(): string { //returns all attributes with html wrapping
        return ("<strong> Title: </strong> " + this.title + "<br /> <strong> Author: </strong>" + this.author + "<br /> <strong> Subject: </strong>" + this.subject);
    }
}

export class Cars extends Ads {
    cName = "Cars";
    name : string;
    company : string;
    model : number;
    engine: number;
    color:string;
    img: string = "Images/c6.png";

    constructor(nameOfCar: string, companyOfCar: string, modelOfCar: number, engineOfCar: number, colorOfCar: string, priceOfCar: number, imgOfCar?: string) {
        super(priceOfCar, imgOfCar); 
        this.name = nameOfCar;
        this.company = companyOfCar;
        this.model = modelOfCar;
        this.engine = engineOfCar;
        this.color = colorOfCar;
    }

    display(): string { //returns all attributes with html wrapping
         return ("<strong> Name: </strong>" + this.name + "<br /> <strong> Company: </strong>" + this.company + "<br /> <strong> Model: </strong>" + this.model + "<br /> <strong> Engine: </strong> " + this.engine + "cc <br /> <strong> Color: </strong>" + this.color);
    }
}

export class Mobiles extends Ads {
    cName = "Mobiles";
    model: string;
    company: string;
    color: string;
    screenSize: number;
    img: string = "Images/m3.png";

    constructor(modelOfMobile: string, companyOfMobile: string, colorOfMobile: string, screenSizeOfMobile: number, priceOfMobile: number, imgOfMobile?: string) {
        super(priceOfMobile, imgOfMobile);
        this.model = modelOfMobile;
        this.company = companyOfMobile;
        this.color = colorOfMobile;
        this.screenSize = screenSizeOfMobile;
        this.price = priceOfMobile;
    }

    display(): string { //returns all attributes with html wrapping
        return ("<strong> Model: </strong>" + this.model + "<br /> <strong> Company: </strong>" + this.company + "<br /> <strong> Color: </strong>" + this.color +  "<br /> <strong> Screen Size: </strong>" + this.screenSize);
    }
}

export class adsArray {

}

@Component({
  selector: 'navMenu', 
  templateUrl: 'app/app.navMenu.html'
})

export class NavMenu { 

    postAd: string = "app/Images/posturad.png";

    fieldsEmptied(): void { // setting all form fields empty when nav bar's button PostAd is clicked

        let inputs = document.getElementsByTagName("input");
        for(let i = 0; i < inputs.length; i++) {
            (<HTMLInputElement>inputs[i]).value = '';
        }
        // de-selecting the select category option in form
        let select = (document.getElementById("category") as HTMLSelectElement).value = 'null';
    }
}