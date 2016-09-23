import { Component } from '@angular/core';
import { SearchBox } from './app.searchBox';

@Component({
  selector: 'my-app',
  template: `<signin></signin>`
   //`<searchBox  text="Type Your Search Here"></searchBox>`
  // (search)="onSearch($event)"
})
export class AppComponent { 
  // onSearch(text) {
  //   console.log(`From App : ${text}`);
  // }
}
