import { Component, Input } from '@angular/core';
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
  selector: 'navMenu', 
  template: `
<!-- Navigation Tabs-->     
        <div>
            <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active">
                    <a href="#all" aria-controls="all" role="tab" data-toggle="tab">
                        <img src="app/Images/all.png" alt="all" class="img-responsive center-block" />
                    </a>
                </li>
                <li role="presentation" id="bTab">
                    <a href="#books" aria-controls="books" role="tab" data-toggle="tab">
                        <img src="app/Images/b1.png" alt="books" class="img-responsive center-block" />
                    </a>
                </li>
                <li role="presentation" id="cTab">
                    <a href="#cars" aria-controls="cars" role="tab" data-toggle="tab">
                        <img src="app/Images/c6.png" alt="cars" class="img-responsive center-block" />
                    </a>
                </li>
                <li role="presentation" id="mTab">
                    <a href="#mobiles" aria-controls="mobiles" role="tab" data-toggle="tab">
                       <img src="app/Images/m1.png" alt="mobiles" class="img-responsive center-block" />
                    </a>
                </li>
                <li id="button" role="presentation">
                    <a href="#form" type="button" aria-controls="form" role="tab" data-toggle="tab" (click)="fieldsEmptied();">
                        <img [src]="postAd" alt="Post Ad" /> 
                    </a>
                </li>
            </ul>

            <!--Tab Panes-->
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane fade in active" id="all">
                    <div id="p1">
                        <h1> All Ads </h1>
                    </div> 
                    <div id="p2" class="hidden">
                        <h1> All Ads </h1>
                    </div> 
                    <div id="p3" class="hidden">
                        <h1> All Ads </h1>
                    </div>                 
                </div>
                <div role="tabpanel" class="tab-pane fade" id="books">
                    <h1> Books </h1>
                    <book></book>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="cars">
                    <h1> Cars </h1>
                    <car></car>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="mobiles">
                    <h1> Mobiles </h1>
                    <mobile></mobile>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="button">
                    
                    
                </div>
            </div>
        </div>
<!--/Navigation Tabs-->`
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

    //document.getElementById("button").innerHTML = '<FormInput></FormInput>';
        let inputs = document.getElementsByTagName("input");
        for(let i = 0; i < inputs.length; i++) {
            (<HTMLInputElement>inputs[i]).value = '';
        }
        // de-selecting the select category option in form
        let select = (document.getElementById("category") as HTMLSelectElement).value = 'null';
    }
/*
// display the All tab
 a: string;


for (let i=0; i < this.ad.length; i++) {
    let classDeterminator : string = this.ad[i].x.cName; // returns class name 

    switch(classDeterminator) { // use class name to check from which class the object belongs
        case 'Books': {
            this.a = '<div class="panel panel-primary">' +
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
                document.getElementById("p1").innerHTML += this.a; // error araha hai cant read innerHTML of null :/
            }
            else if(i>=4 && i<=7) {
                document.getElementById("p2").innerHTML += this.a;
            }
            else if(i>=8) {
                document.getElementById("p3").innerHTML += this.a;
            }
            break;
        }
        case 'Cars' : {
            this.a = '<div class="panel panel-primary">' +
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
                document.getElementById("p1").innerHTML += this.a; // error araha hai cant read innerHTML of null :/
            }
            else if(i>=4 && i<=7) {
                document.getElementById("p2").innerHTML += this.a;
            }
            else if(i>=8) {
                document.getElementById("p3").innerHTML += this.a;
            }
            break;
        }
        case 'Mobiles' : {
             this.a = '<div class="panel panel-primary">' +
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
                document.getElementById("p1").innerHTML += this.a; // error araha hai cant read innerHTML of null :/
            }
            else if(i>=4 && i<=7) {
                document.getElementById("p2").innerHTML += this.a;
            }
            else if(i>=8) {
                document.getElementById("p3").innerHTML += this.a;
            }
            break;
        }
        default: {
            alert("Error!"); // yahan pohnchenge hi nhi hopefully
        }
    } // switch ends

    } // for-loop ends

// display the Books tab
let showBook : string;
for(var i = 0; i < this.ad.length; i++) { 
    let classDeterminator : string = this.ad[i].x.cName; // returns class name
    if(classDeterminator === "Books") {
        showBook = '<div class="panel panel-primary">' +
                            '<div class="panel-heading">' +
                                '<h3 class="panel-title">' + //title
                                    this.ad[i].x.subject +
                                '</h3>' +
                            '</div>' +
                            '<div class="panel-body row">'+
                                '<div class= "col-sm-4">' + // image
                                    '<img src=' + this.ad[i].x.image + ' alt="book" height="100" width="100" />' +
                                '</div>' +
                                '<div class="col-sm-8">' + // details
                                    this.ad[i].x.display() +
                                '</div>' +
                            '</div>' +
                            '<div class="panel-footer text-right"> <strong>Price: Rs. ' + this.ad[i].x.price + '/-</strong> </div>' +
                        '</div>'; // creating new panel with title and content for book 
    
    document.getElementById("books").innerHTML += showBook;
   }
}

// display the Cars tab
let showCar : string;
for(var i = 0; i < this.ad.length; i++) { 
    let classDeterminator : string = this.ad[i].x.cName; // returns class name
    if(classDeterminator === "Cars") {
        showCar = '<div class="panel panel-primary">' +
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
                            '<div class="panel-footer text-right"> <strong>Price: Rs. ' + ad[i].x.price + '/-</strong> </div>' +
                        '</div>'; // creating new panel with title and content for car

        document.getElementById("cars").innerHTML += showCar;
    }
}

// display the Mobiles tab
let showMobile : string;
for(var i = 0; i < this.ad.length; i++) { 
    let classDeterminator : string = this.ad[i].x.cName; // returns class name
    if(classDeterminator === "Mobiles") {
        showMobile ='<div class="panel panel-primary">' +
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
                            '<div class="panel-footer text-right"> <strong>Price: Rs. ' + this.ad[i].x.price + '/-</strong> </div>' +
                        '</div>'; // creating new panel with title and content for mobile

        document.getElementById("mobiles").innerHTML += showMobile;
    }
    }
*/
    setScreen(id) {
        document.getElementById("screens").innerHTML = '<book></book>';
    }
}