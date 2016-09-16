import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'
// import { AppComponent }  from './app.component';
import { SearchBox }     from './app.searchBox';
import { Jumbotron }     from './app.header';
import { NavMenu } from './app.navMenu';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ Jumbotron, SearchBox, NavMenu ], // AppComponent,
  bootstrap:    [ Jumbotron, SearchBox, NavMenu ] // AppComponent,
})
export class AppModule { }
