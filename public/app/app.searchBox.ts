import { Component, Input } from '@angular/core';

@Component({
  selector: 'searchBox',
  template: `<h3> Search By Ad Title</h3>
            <label for="search"> Search by ad title </label>
            <input type="text" placeholder={{text}} id= "search" #input />
            <button class="clear-btn" (click)="clear(input)">Clear </button>`
})
export class SearchBox { 

  @Input('placeholder')
  text : string = "Search";

  clear(input) {
    input.value = '';
  }
}
