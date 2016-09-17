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

export class Books extends Ads{ 
    cName = "Books";
    title : string;
    author : string;
    subject : string;
    
    // constructor automatically assigns the argument values to class attributes whenever a new instance is generated
    constructor(titleOfBook: string, authorOfBook: string, subjectOfBook: string, priceOfBook: number, img: string) {
        super(priceOfBook, img); 
        this.title = titleOfBook;
        this.author = authorOfBook;
        this.subject = subjectOfBook;
    }
}

@Component({
  selector: 'book',
  template: `<div class="panel panel-primary">
                            <div class="panel-heading">
                                <h3 class="panel-title"> 
                                    {{ad[0].x.subject}} 
                                </h3>
                            </div>
                            <div class="panel-body row">
                                <div class= "col-sm-4">
                                    <img src={{this.ad[0].x.image}} alt="book" height="100" width="100" /> 
                                </div>
                                <div class="col-sm-8"> 
                                    <strong> Title: </strong> {{this.ad[0].x.title}} <br />
                                    <strong> Author: </strong> {{this.ad[0].x.author}} <br />
                                    <strong> Subject: </strong> {{this.ad[0].x.subject}} 
                                </div>
                            </div>
                            <div class="panel-footer text-right"> <strong>Price: Rs. {{this.ad[0].x.price}} /-</strong> </div> 
                        </div>`
})
export class DisplayBook {
    ad = [ // hard coded array for ad listings
    {x : new Books("HTML & CSS", "Jon Duckett", "HTML & CSS", 200, "Images/htmlcss.png")},
    {x : new Books("Git Essentials", "Ferdinando Santacroce", "Git", 700, "Images/git.png")},
]; // objects are pushed dynamically whenever a user posts ad
} 