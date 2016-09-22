import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { SearchBox }     from './app.searchBox';
import { Jumbotron }     from './app.header';
import { NavMenu } from './app.navMenu';
import { DisplayBook } from './book';
import { DisplayMobile } from './mobile';
import {DisplayCar} from './car';
import {Pagination} from './app.pagination';
import {formInput} from './app.forminput';
import {Loop} from './forloop';
import {AdService} from './ad.service';
// import {OneBook} from './oneBook';
// import {OneCar} from './oneCar';
// import {OneMobile} from './oneMobile';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, Jumbotron, SearchBox, NavMenu, DisplayBook, DisplayMobile, DisplayCar, Pagination, formInput, Loop 
  ], //, OneBook, OneCar, OneMobile
  bootstrap:    [ 
    AppComponent, Jumbotron, SearchBox, NavMenu, DisplayBook, DisplayMobile, DisplayCar, Pagination, formInput, Loop 
  ] //, OneBook, OneCar, OneMobile
})
export class AppModule { }
