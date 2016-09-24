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
import {Footer} from './footer';
import {SignIn} from './signin'; 
import {Index1} from './index1';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, Jumbotron, SearchBox, NavMenu, DisplayBook, DisplayMobile, DisplayCar, formInput, Loop, Footer , SignIn, Index1
  ], //
  bootstrap:    [ 
    AppComponent, Jumbotron, SearchBox, NavMenu, DisplayBook, DisplayMobile, DisplayCar, formInput, Loop, Footer, SignIn, Index1
  ] //, SignIn
})
export class AppModule { }
