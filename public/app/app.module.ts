import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'
// import { AppComponent }  from './app.component';
import { SearchBox }     from './app.searchBox';
import { Jumbotron }     from './app.header';
import { Ads, Books, Cars, Mobiles, NavMenu } from './app.navMenu';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ Jumbotron, SearchBox, Ads, Books, Cars, Mobiles, NavMenu ], // AppComponent,
  bootstrap:    [ Jumbotron, SearchBox, Ads, Books, Cars, Mobiles, NavMenu ] // AppComponent,
})
export class AppModule { }
