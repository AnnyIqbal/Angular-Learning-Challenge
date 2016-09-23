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
import {OneBook} from './oneBook';
import {OneCar} from './oneCar';
import {OneMobile} from './oneMobile';
import {Footer} from './footer';
//import {SignIn} from './signin'; thori der k lie band kia hai kholna na bhoolna

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, Jumbotron, SearchBox, NavMenu, DisplayBook, OneBook, DisplayMobile, OneMobile, DisplayCar, OneCar, formInput, Loop, Footer 
  ], //, SignIn
  bootstrap:    [ 
    AppComponent, Jumbotron, SearchBox, NavMenu, DisplayBook, OneBook, DisplayMobile, OneMobile, DisplayCar, OneCar, formInput, Loop, Footer
  ] //, SignIn
})
export class AppModule { }
