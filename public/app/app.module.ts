import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'
// import { AppComponent }  from './app.component';
import { SearchBox }     from './app.searchBox';
import { Jumbotron }       from './app.header';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ SearchBox, Jumbotron ], // AppComponent,
  bootstrap:    [ SearchBox, Jumbotron ] // AppComponent,
})
export class AppModule { }
