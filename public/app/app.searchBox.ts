import { Component, Input } from '@angular/core';

@Component({
  selector: 'searchBox', 
  template: `<h3> Search By Ad Title</h3>
    <label for="search"> Search by ad title </label>
    <input type="text"  [placeholder]="'Custom Placeholder'" id= "search" #input />
    <button class="clear-btn" (click)="clear(input)">Clear </button>`,
  styles: [`.clear-btn {
      background-color: rgb(72, 95, 249);
      color: white;
      width: 60px;
      height: 22px;
    }`]
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
