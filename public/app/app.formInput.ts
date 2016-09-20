 import { Component, Input } from '@angular/core';
 import {Ads, Books, Cars, Mobiles} from './app.navMenu';
 import {DisplayBook} from './book';
 import {DisplayCar} from './car';
 import {DisplayMobile} from './mobile'; 

@Component({
  selector: 'FormInput', 
  templateUrl: 'app/app.formInput.html'
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
    checkCategory(): void { // setting and removing the required attribute and form divs according to category selection
        var cat: string = (document.getElementById("category") as HTMLInputElement).value; // type casting string into HTMLInputElement
        switch(cat) {
            case 'book': { // show book and hide others
                document.getElementById("book").className = "show";
                document.getElementById("car").className = "hidden";
                document.getElementById("mobile").className = "hidden";
                break;
            }
            case 'car': { // show car and hide others
                document.getElementById("car").className = "show";
                document.getElementById("book").className = "hidden";
                document.getElementById("mobile").className = "hidden";
                break;
            }
            case 'mobile': { // show mobile and hide others
                document.getElementById("mobile").className = "show";
                document.getElementById("book").className = "hidden";
                document.getElementById("car").className = "hidden";
                break;
            }
            default: { //throwing error
                document.getElementById("category").focus();
            }
        }
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
                showBook = '<book></book>';
                
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
                showCar = '<car></car>';
                
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
                showMobile = '<mobile></mobile>';
                
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
 }
