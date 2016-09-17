import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'
//import { AppComponent }  from './app.component';
import { SearchBox }     from './app.searchBox';
import { Jumbotron }     from './app.header';
import { NavMenu } from './app.navMenu';
import { DisplayBook } from './book';
import { DisplayMobile } from './mobile';
import {DisplayCar} from './car';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ Jumbotron, SearchBox, NavMenu, DisplayBook, DisplayMobile, DisplayCar ], // AppComponent,
  bootstrap:    [ Jumbotron, SearchBox, NavMenu, DisplayBook, DisplayMobile, DisplayCar ] // AppComponent,
})
export class AppModule { }
