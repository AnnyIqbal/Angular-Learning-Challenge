import { Component, Input } from '@angular/core';
import { ad } from './adArray'; //ad array imported
import {Books, Cars, Mobiles} from './adObjects';
import { DisplayBook } from './book';
import { DisplayMobile } from './mobile';
import {DisplayCar} from './car';

@Component({
  selector: 'searchBox', 
  template: `
    <span>
      <label for="input" class="sr-only"> Search Ads Here </label>
      <input type="search" [placeholder]="'Search'" #input (keydown.enter) = "search(input.value)" />
      <button class="search-btn" (click)="search(input.value)"> Search </button>
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
  }
  `]
})
export class SearchBox { 

  @Input('placeholder')
  text : string = "Search Here";

  search(searchWord) {
    for(let i = 0; i < ad.length; i++){
      for (var key in ad[i].x) {
        if (ad[i].x.hasOwnProperty(key)) {
          if((searchWord.toLowerCase() === key) || (searchWord.toLowerCase() === ad[i].x[key]) || (searchWord.toLowerCase() === ad[i].x.cName.toLowerCase())) {
            // document.getElementsByClassName("tab-pane fade in active")[0].className = "tab-pane fade"; //jo b active hai naavMenu use fade krdo
            // document.getElementById(ad[i].x.cName.toLowerCase()).className = "tab-pane fade in active"; //searched category ki navmenu ko active krdo

            switch(ad[i].x.cName){
              case "Books": {
                alert(ad[i].x[key]);
                document.getElementById("p1").className = "tab-pane fade";
                document.getElementById("books").className ="tab-pane fade in active";
                document.getElementById("aTab").className = ''; //removing active class
                document.getElementById("bTab").className = 'active'; //activating the books tab;
                document.getElementById("p1").innerHTML = '<book></book>'; //display books array
                break;
              }
              case "Cars": {
                alert(ad[i].x[key]);
                document.getElementById("p1").className = "tab-pane fade";
                document.getElementById("cars").className ="tab-pane fade in active";
                document.getElementById("aTab").className = ''; //removing active class
                document.getElementById("cTab").className = 'active'; //activating the cars tab
                document.getElementById("p1").innerHTML = '<car></car>'; //display cars array
                break;
              }
              case "Mobiles": {
                alert(ad[i].x[key]);
                document.getElementById("p1").className = "tab-pane fade";
                document.getElementById("mobiles").className ="tab-pane fade in active";
                document.getElementById("aTab").className = ''; //removing active class
                document.getElementById("mTab").className = 'active'; //activating the mobiles tab
                document.getElementById("p1").innerHTML = '<mobile></mobile>'; //display mobiles array
                break;
              }
              default: {
                alert("You searched for: " + searchWord + "<br> Match not Found!"); //unreachable it seems
              }
            } // switch ends
            //alert("You searched for: " + searchWord + "Here it is! " + key + " -> " + ad[i].x[key]);
          } // inner-if ends
        } //outer-if ends
      } // inner-for ends
    } //outer for ends

    if(matched === false) { //throw error
      alert("You searched for '" + searchWord + "' : Match not Found!");
    }
 } // search() ends
}
