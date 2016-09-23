import { Component, Input } from '@angular/core';
import { ad } from './adArray'; //ad array imported
import {Ads, Books, Cars, Mobiles} from './adObjects';
import { DisplayBook } from './book';
import { DisplayMobile } from './mobile';
import {DisplayCar} from './car';

@Component({
  selector: 'searchBox', 
  template: `
    <span>
      <label for="input" class="sr-only"> Search Ads Here </label>
      <input type="search" [placeholder]="'Search'" #input autofocus (keydown.enter) = "search(input.value)" />
      <button class="search-btn btn btn-primary" (click)="search(input.value)"> Search </button>
    </span>
    <br /><br />
    `,
  styles: [`
  span {
    font-family: Comic-sans, serif;
  }
  .search-btn {
    background-color: rgb(72, 95, 249);
    color: white;
  }
  input {
    width: 50%;
    padding: 5px;
  }
  `]
})
export class SearchBox { 
ad : any[] = [ // hard coded array for ad listings
        {x : new Books("HTML & CSS", "Jon Duckett", "HTML & CSS", 200, "app/Images/htmlcss.png")},
        {x : new Books("Git Essentials", "Ferdinando Santacroce", "Git", 700, "app/Images/git.png")},
        {x : new Mobiles("J1-Ace", "Samsung", "White", 4.3, 19000, "app/Images/j1.jpg")},
        {x : new Books("A Smarter Way To Learn JavaScript", "Mark Mayers", "JavaScript", 500, "app/Images/js.png")},
        {x : new Cars("Vitz", "Toyota", 2017, 1200, "Red", 500000, "app/Images/vitz.jpg")},
        {x : new Cars("Corolla", "Toyota", 2016, 1500, "Blue", 540000, "app/Images/corolla.jpg")},
        {x : new Cars("CheryQQ", "Santro", 2016, 1000, "White", 205000, "app/Images/cheryqq.jpg")},
        {x : new Mobiles("Noir S1", "Q-Mobile", "Black", 5, 11000, "app/Images/S1.png")},
        {x : new Mobiles("E8-2", "htc", "black", 5, 27000, "app/Images/htc.jpg")}
    ];

  @Input('placeholder')
  text : string = "Search Here";

  search(searchWord) {
      let text;

    for(let i = 0; i < ad.length; i++){
      for (var key in ad[i].x) {
        if (ad[i].x.hasOwnProperty(key)) {
          if(searchWord.toLowerCase() === ad[i].x[key].toLowerCase()) {
            switch(ad[i].x.cName){
              case "Books": {
                 document.getElementById("search").innerHTML +=
                  `<div class="panel panel-primary">
                            <div class="panel-heading">
                                <h3 class="panel-title"> 
                                    {{this.ad[i].x[key] }}
                                </h3>
                            </div>
                            <div class="panel-body row">
                                <div class= "col-sm-4">
                                    <img src={{key.image}} alt="book" height="100" width="100" /> 
                                </div>
                                <div class="col-sm-8"> 
                                    <strong> Title: </strong> {{key.title}} <br />
                                    <strong> Author: </strong> {{key.author}} <br />
                                    <strong> Subject: </strong> {{key.subject}} 
                                </div>
                            </div>
                            <div class="panel-footer text-right"> <strong>Price: Rs. {{key.price}} /-</strong> </div> 
                        </div>
                    `; //display the books
                break;
              }
              case "Cars": {
                alert(ad[i].x[key]);
                document.getElementById("search").innerHTML +=
                 `<div class="panel panel-primary">
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
                </div>`
                break;
              }
              case "Mobiles": {
                alert(ad[i].x[key]);
                document.getElementById("search").innerHTML +=
                `<div class="panel panel-primary">
                  <div class="panel-heading">
                      <h3 class="panel-title"> {{item.x.company }} {{item.x.model}} </h3>
                  </div>
                  <div class="panel-body row">
                      <div class= "col-sm-4">
                          <img src={{item.x.image}} alt="car" height="100" width="100" />
                      </div>
                      <div class="col-sm-8">
                          <strong> Model: </strong> {{item.x.model}} <br />
                          <strong> Company: </strong> {{item.x.company }} <br />
                          <strong> Color: </strong> {{item.x.color}} <br />
                          <strong> Screen Size: </strong> {{item.x.screenSize}}
                      </div>
                  </div>
                  <div class="panel-footer text-right"> <strong>Price: Rs. {{item.x.price}}/-</strong> </div>
              </div>`;
              break;
              }
              default: {
                alert("Match not Found!!");
              }
            } // switch ends
          }
          else if((searchWord.toLowerCase() === key.toLowerCase()) || (searchWord.toLowerCase() === ad[i].x.cName.toLowerCase())) {
            switch(ad[i].x.cName){
              case "Books": {
                alert(ad[i].x[key]); //values eg git
                document.getElementById("search").innerHTML += '<book></book>'
                break;
              }
              case "Cars": {
                alert(ad[i].x[key]);
                document.getElementById("search").innerHTML += '<car></car>'; //display cars array
                break;
              }
              case "Mobiles": {
                alert(ad[i].x[key]);
                document.getElementById("search").innerHTML += '<mobile></mobile>'; //display mobiles array
                break;
              }
              default: {
                alert("You searched for: " + searchWord + "<br> Match not Found!"); //unreachable it seems
              //alert("You searched for: " + searchWord + "Here it is! " + key + " -> " + ad[i].x[key]);
              }
            } // switch ends
          } // inner-if ends
        } //outer-if ends
      } // inner-for ends
    } //outer for ends
 } // search() ends
}
