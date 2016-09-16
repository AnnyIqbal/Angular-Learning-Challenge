import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { SearchBox } from './app.searchBox';

@Component({
  selector: 'my-app',
  directives: [SearchBox],
  template: `<searchBox (search)="onSearch($event)" text="Type Your Search Here"></searchBox>`
})
export class AppComponent { 
  onSearch(text) {
    console.log(`From App : ${text}`);
  }
}
bootstrap(AppComponent);