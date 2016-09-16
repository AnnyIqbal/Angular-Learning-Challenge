import { Component, Input } from '@angular/core';

@Component({
  selector: 'searchBox', 
  template: `<span> Search By Ad Title
    <label for="search" class="sr-only"> Search by ad title </label>
    <input type="text" [placeholder]="'Search'" id= "search" #input />
    <button class="clear-btn" (click)="clear(input)">Clear </button>
    </span>`,
  styles: [`
  span {
    font-weight: bold;
  }
  .clear-btn {
    background-color: rgb(72, 95, 249);
    color: white;
  }
  input {
    width: 50%;
  }
  `]
  // templateURL: 'app.searchBox.html',
  // styleURLs: ['app.searchBox.css']
})
export class SearchBox { 

  @Input('placeholder')
  text : string = "Search";

  clear(input) {
    input.value = '';
  }
}
