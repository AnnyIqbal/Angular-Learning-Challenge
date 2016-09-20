import { Component, Input } from '@angular/core';
import {NgFor} from '@angular/common';

export class Ads {
    cName : string;
    price: number;

    constructor(priceOfObject: number) {
        this.price = priceOfObject;
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
        super(priceOfBook);
        if(imgOfBook) {
            this.img = imgOfBook;
        } 
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
        super(priceOfCar);
        if(imgOfCar) {
            this.img = imgOfCar;
        } 
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
        super(priceOfMobile);
        if(imgOfMobile) {
            this.img = imgOfMobile;
        }
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


@Component({
  selector: 'navMenu', 
  templateUrl: 'app/app.navMenu.html'
})

export class NavMenu { 

    postAd: string = "app/Images/posturad.png";

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

    fieldsEmptied(): void { // setting all form fields empty when nav bar's button PostAd is clicked

        let inputs = document.getElementsByTagName("input");
        for(let i = 0; i < inputs.length; i++) {
            (<HTMLInputElement>inputs[i]).value = '';
        }
        // de-selecting the select category option in form
        let select = (document.getElementById("category") as HTMLSelectElement).value = 'null';
    }
}