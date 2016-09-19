import { Component, Input } from '@angular/core';

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
    //img : string = "app/Images/b1.png"; //y working not???? i want to have img as an optional param having a default value 
    
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
                    <a href="#form" type="button" aria-controls="form" role="tab" data-toggle="tab" onclick="fieldsEmptied();">
                        <!--class="btn btn-primary"-->
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
                    <nav aria-label="Page navigation"> <!-- pagination list -->
                        <ul class="pagination">
                            <!--<li><span><span aria-hidden="true">&laquo;</span></span></li>-->
                            <li class="active"><a href="#p1" onclick="activatePage('p1', this);">1</a></li>
                            <li><a href="#p2" onclick="activatePage('p2', this);">2</a></li>
                            <li><a href="#p3" onclick="activatePage('p3', this);">3</a></li>
                            <!--<li><span><span aria-hidden="true">&raquo;</span></span></li>-->
                        </ul>
                    </nav> <!-- /pagination list -->
                </div>
                <div role="tabpanel" class="tab-pane fade" id="books">
                    <h1> Books </h1>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="cars">
                    <h1> Cars </h1>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="mobiles">
                    <h1> Mobiles </h1>
                </div>
            </div>
        </div>
<!--/Navigation Tabs-->`,
})

export class NavMenu { 
    postAd: string = "app/Images/posturad.png";
}