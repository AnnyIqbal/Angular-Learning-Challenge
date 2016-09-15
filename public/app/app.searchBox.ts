import { Component } from '@angular/core';

@Component({
  selector: 'searchBox',
  template: `<h3> Search By Ad Title</h3>
            <label for="search"> Search by ad title </label>
            <input type="text" placeholder="Search" id= "search" />
            <button class="clear-btn">`
})
export class SearchBox { 

}
