import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'searchBox', 
  template: `<span> Search By Ad Title
    <label for="search" class="sr-only"> Search by ad title </label>
    <input type="text" [placeholder]="'Search'" id= "search" #input (keydown.enter) = "onSearch(input.value)" />
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

  @Output()
  search = new EventEmitter();

  clear(input) {
    input.value = '';
  }

  onSearch(searchText) {
    this.search.emit(searchText);
  }
}
