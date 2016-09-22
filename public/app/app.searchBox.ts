import { Component, Input } from '@angular/core';

@Component({
  selector: 'searchBox', 
  template: `
    <span>
      <label for="input" class="sr-only"> Search by ad title </label>
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

  search(input) {
    if(input.value === "b" ||"bo" || "boo" || "book" || "books") {
      document.getElementById("p1").className = "tab-pane fade";
      document.getElementById("books").className ="tab-pane fade in active";
      document.getElementById("aTab").className = ''; //removing active class
      document.getElementById("bTab").className = 'active'; //activating the books tab

      document.getElementById("p1").innerHTML = '<book></book>'; //display books array
    }
    else if(input.value === "c" ||"ca" || "car" || "cars") {
      document.getElementById("p1").className = "tab-pane fade";
      document.getElementById("cars").className ="tab-pane fade in active";
      document.getElementById("aTab").className = ''; //removing active class
      document.getElementById("cTab").className = 'active'; //activating the cars tab

      document.getElementById("p1").innerHTML = '<car></car>'; //display cars array
    }
    else if(input.value === "m" ||"mo" || "mob" || "mobi" || "mobil" || "mobile" || "mobiles") {
      document.getElementById("p1").className = "tab-pane fade";
      document.getElementById("mobiles").className ="tab-pane fade in active";
      document.getElementById("aTab").className = ''; //removing active class
      document.getElementById("mTab").className = 'active'; //activating the mobiles tab

      document.getElementById("p1").innerHTML = '<mobile></mobile>'; //display mobiles array
    }
  }
}
