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
import {formInput} from './app.forminput';
import {Loop} from './forloop';
import {AdService} from './ad.service';
//import {SignIn} from './signin'; thori der k lie band kia hai kholna na bhoolna
// import {OneBook} from './oneBook';
// import {OneCar} from './oneCar';
// import {OneMobile} from './oneMobile';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, Jumbotron, SearchBox, NavMenu, DisplayBook, DisplayMobile, DisplayCar, formInput, Loop 
  ], //, OneBook, OneCar, OneMobile, SignIn
  bootstrap:    [ 
    AppComponent, Jumbotron, SearchBox, NavMenu, DisplayBook, DisplayMobile, DisplayCar, formInput, Loop 
  ] //, OneBook, OneCar, OneMobile, SignIn
})
export class AppModule { }
