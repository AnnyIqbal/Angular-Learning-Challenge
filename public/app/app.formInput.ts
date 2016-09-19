 import { Component, Input } from '@angular/core';
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
  selector: 'FormInput', 
  templateUrl: `app.formInput.html`
})
export class formInput {
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

    isNotEmpty(id: string): boolean { // check whether an input field is empty
        let check: HTMLInputElement = document.getElementById(id) as HTMLInputElement;
        if(check.value.toString().length === 0) {
            alert("This is a required field!"); //throw error
            check.focus(); // set focus on the field
        }
        else {
            return true;
        }
    }
    validateForm(): void { //validates form and calls pushAd function if all goes right
        var cat: string = (document.getElementById("category") as HTMLInputElement).value;
        switch(cat) {
            case "book": {
                if(this.isNotEmpty("username") && this.isNotEmpty("email")) { // if main form is filled
                    if(this.isNotEmpty("Btitle") && this.isNotEmpty("author") && this.isNotEmpty("subject") && this.isNotEmpty("Bprice")) { // check for book's div
                        this.pushAd();
                    }
                }
            break;
            }
            case "car": { 
                if(this.isNotEmpty("username") && this.isNotEmpty("email")) { // if main form is filled
                    if(this.isNotEmpty("name") && this.isNotEmpty("Ccompany") && this.isNotEmpty("Cmodel") && this.isNotEmpty("engine") && this.isNotEmpty("Ccolor") && this.isNotEmpty("Cprice")) { // check for car's div
                        this.pushAd();
                    }
                }
            break;
            }
            case "mobile": {
                if(this.isNotEmpty("username") && this.isNotEmpty("email")) { // if main form is filled
                    if(this.isNotEmpty("Mmodel") && this.isNotEmpty("Mcompany") && this.isNotEmpty("Mcolor") && this.isNotEmpty("screensize") && this.isNotEmpty("Mprice")) { // check for mobile's div
                        this.pushAd();
                    }
                }
            break;
            } 
            default: {
                if(this.isNotEmpty("username") && this.isNotEmpty("email")) { // if main form is filled
                    alert("Select a category please!"); // throw error
                }
            } 
        } // </switch>
    }
    pushAd(): void { // pushing the posted ads in array and displaying in appropriate tab    

        // selected ad category
        var cat: string = (document.getElementById("category") as HTMLInputElement).value; // type casting string into HTMLInputElement

        //push the ad as an object in the ads array
        switch(cat) {
            case 'book': {
                // getting all input values
                let title: string = (document.getElementById("Btitle") as HTMLInputElement).value; // type casting string into HTMLInputElement
                let author: string = (document.getElementById("author") as HTMLInputElement).value;
                let subject: string = (document.getElementById("subject") as HTMLInputElement).value;
                let price: number = parseFloat((document.getElementById("Bprice") as HTMLInputElement).value);
                let image: string = (document.getElementById("Bimage") as HTMLInputElement).value; // C:\fakepath\filename.extension
                let filename: string = image.slice(12, image.length); //filename.extension
                let src : string = "C:/Users/Public/Pictures/" + filename; // the img u hv 2 upload should be placed at the specific url

                //creating new Books instance and pushing dynamically in the ad array
                this.ad.push({x: new Books(title, author, subject, price, src)}); // passing specific url for image upload, img must be at that location
    
                document.getElementById("books").className = "tab-pane fade in active"; // activate books tab
                document.getElementById("form").className = "tab-pane fade"; // deactivate form tab  
                
                // display it in the All & Books tab
                let showBook : string, lastIndex: number = this.ad.length-1;
                showBook = '<div class="panel panel-primary">' +
                                    '<div class="panel-heading">' +
                                        '<h3 class="panel-title">' + //title
                                            this.ad[lastIndex].x.subject +
                                        '</h3>' +
                                    '</div>' +
                                    '<div class="panel-body row">'+
                                        '<div class= "col-sm-4">' + // image
                                            '<img src=' + this.ad[lastIndex].x.image + ' alt="book" height="100" width="100" />' +
                                        '</div>' +
                                        '<div class="col-sm-8">' + // details
                                            this.ad[lastIndex].x.display() +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="panel-footer text-right"> <strong>Price: Rs. ' + this.ad[lastIndex].x.price + '/-</strong> </div>' +
                                '</div>'; // creating new panel with title and content for book 
                
                document.getElementById("p3").innerHTML += showBook; // "all" tab page 3, id="p3"
                document.getElementById("books").innerHTML += showBook;
                
                document.getElementById("button").className = ''; // deactivating the nav bar's POST AD button
                document.getElementById("bTab").className = 'active'; // activating the books tab
                break;
            }
            case 'car': {
                // getting all input values
                let name: string = (document.getElementById("name") as HTMLInputElement).value; // type casting string into HTMLInputElement
                let company: string = (<HTMLInputElement>document.getElementById("Ccompany")).value; // alternate way to type casting 
                let model: number = parseFloat((document.getElementById("Cmodel") as HTMLInputElement).value);
                let engine: number = parseFloat((document.getElementById("engine") as HTMLInputElement).value);
                let color: string = (document.getElementById("Ccolor") as HTMLInputElement).value;
                let price: number = parseFloat((document.getElementById("Cprice") as HTMLInputElement).value);
                let image: string = (document.getElementById("Cimage") as HTMLInputElement).value; // C:\fakepath\filename.extension
                let filename: string = image.slice(12, image.length); //filename.extension
                let src : string = "C:/Users/Public/Pictures/" + filename; // the img u hv 2 upload should be placed at the specific url

                //creating new Cars instance and pushing dynamically in the ad array
                this.ad.push({x: new Cars(name, company, model, engine, color, price, src)});

                document.getElementById("cars").className = "tab-pane fade in active"; // activate cars tab
                document.getElementById("form").className = "tab-pane fade"; // deactivate form tab  
                
                // display it in the All & Cars tab
                let showCar : string, lastIndex: number = this.ad.length-1;
                showCar = '<div class="panel panel-primary">' +
                                    '<div class="panel-heading">' +
                                        '<h3 class="panel-title">' + //title
                                            this.ad[lastIndex].x.name +
                                        '</h3>' +
                                    '</div>' +
                                    '<div class="panel-body row">'+
                                        '<div class= "col-sm-4">' + //image
                                            '<img src=' + this.ad[lastIndex].x.image + ' alt="car" height="100" width="100" />' +
                                        '</div>' +
                                        '<div class="col-sm-8">' + // details
                                            this.ad[lastIndex].x.display() +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="panel-footer text-right"> <strong>Price: Rs. ' + this.ad[lastIndex].x.price + '/-</strong> </div>' +
                                '</div>'; // creating new panel with title and content for car
                
                document.getElementById("p3").innerHTML += showCar; // "all" tab page 3, id="p3"
                document.getElementById("cars").innerHTML += showCar;

                document.getElementById("button").className = ''; // deactivating the nav bar's POST AD button
                document.getElementById("cTab").className = 'active'; //activating the cars tab
                break;
            }
            case 'mobile': {
                // getting all input values
                let model: string = (document.getElementById("Mmodel") as HTMLInputElement).value; // type casting string into HTMLInputElement
                let company: string = (document.getElementById("Mcompany") as HTMLInputElement).value;
                let color: string = (document.getElementById("Mcolor") as HTMLInputElement).value;
                let screenSize: number = parseFloat((document.getElementById("screensize") as HTMLInputElement).value);
                let price: number = parseFloat((document.getElementById("Mprice") as HTMLInputElement).value);
                let image: string = (document.getElementById("Mimage") as HTMLInputElement).value; // C:\fakepath\filename.extension
                let filename: string = image.slice(12, image.length); //filename.extension
                let src : string = "C:/Users/Public/Pictures/" + filename; // the img u hv 2 upload should be placed at the specific url

                //creating new Mobiles instance and pushing dynamically in the ad array
                this.ad.push({x: new Mobiles(model, company, color, screenSize, price, src)});

                document.getElementById("mobiles").className = "tab-pane fade in active"; // activate mobiles tab
                document.getElementById("form").className = "tab-pane fade"; // deactivate form tab  

                // display it in the All & Mobiles tab
                let showMobile : string, lastIndex: number = this.ad.length-1;
                showMobile ='<div class="panel panel-primary">' +
                                    '<div class="panel-heading">' +
                                        '<h3 class="panel-title">' + //title
                                            this.ad[lastIndex].x.company + ' ' + this.ad[lastIndex].x.model +
                                        '</h3>' +
                                    '</div>' +
                                    '<div class="panel-body row">'+
                                        '<div class= "col-sm-4">' + //image
                                            '<img src=' + this.ad[lastIndex].x.image + ' alt="mobile" height="100" width="100" />' +
                                        '</div>' +
                                        '<div class="col-sm-8">' + // details
                                            this.ad[lastIndex].x.display() +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="panel-footer text-right"> <strong>Price: Rs. ' + ad[lastIndex].x.price + '/-</strong> </div>' +
                                '</div>'; // creating new panel with title and content for mobile

                document.getElementById("p3").innerHTML += showMobile; // "all" tab page 3, id="p3"
                document.getElementById("mobiles").innerHTML += showMobile;

                document.getElementById("button").className = ''; // deactivating the nav bar's POST AD button
                document.getElementById("mTab").className = 'active'; //activating the mobiles tab
                break;
            }
            default: {
                alert("Error! select a proper category"); // ni pohnchenge yhn
            }
        } // </switch>
        // hiding all form category divs
        document.getElementById("book").className = "hidden";
        document.getElementById("car").className = "hidden";
        document.getElementById("mobile").className = "hidden";
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
    }*/
 }
