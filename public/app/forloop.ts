import {Component} from '@angular/core';
import {NgFor} from '@angular/common';


export class Ads {
    cName : string;
    price: number;
    image: string;

    constructor(priceOfObject: number, imageOfObject?: string) {
        this.price = priceOfObject;
        this.image = imageOfObject;
    }
}

export class Books extends Ads{ 
    cName = "Books";
    title : string;
    author : string;
    subject : string;
    img = "app/Images/b1.png";
    
    // constructor automatically assigns the argument values to class attributes whenever a new instance is generated
    constructor(titleOfBook: string, authorOfBook: string, subjectOfBook: string, priceOfBook: number, img: string) {
        super(priceOfBook, img); 
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
    img: "app/Images/c6.png";

    constructor(nameOfCar: string, companyOfCar: string, modelOfCar: number, engineOfCar: number, colorOfCar: string, priceOfCar: number, img: string) {
        super(priceOfCar, img);
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
    img: "app/Images/b3.png";

    constructor(modelOfMobile: string, companyOfMobile: string, colorOfMobile: string, screenSizeOfMobile: number, priceOfMobile: number, img: string) {
        super(priceOfMobile, img);
        this.model = modelOfMobile;
        this.company = companyOfMobile;
        this.color = colorOfMobile;
        this.screenSize = screenSizeOfMobile;
        this.price = priceOfMobile;
        this.image = img;
    }

    display(): string { //returns all attributes with html wrapping
        return ("<strong> Model: </strong>" + this.model + "<br /> <strong> Company: </strong>" + this.company + "<br /> <strong> Color: </strong>" + this.color +  "<br /> <strong> Screen Size: </strong>" + this.screenSize);
    }
}

@Component({
    selector: 'for',
    template: `<ul>
                    <li *ngFor="let item of ad"> {{ item }}.display()</li>
               </ul>`,
    styles: [`
    li {
        list-style-type: none;
    }
    `]
})
export class Loop { 
    names: string[];
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


}