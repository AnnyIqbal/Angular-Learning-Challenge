import { Component } from '@angular/core';
import { SearchBox } from './app.searchBox';

@Component({
  selector: 'my-app',
  //outputs: [SearchBox],
  template: `<searchBox (search)="onSearch($event)" text="Type Your Search Here"></searchBox>`
})
export class AppComponent { 
  onSearch(text) {
    console.log(`From App : ${text}`);
  }
}
