import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'
import { AppComponent }  from './app.component';
import { SearchBox }     from './app.searchBox';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SearchBox ],
  bootstrap:    [ AppComponent, SearchBox ]
})
export class AppModule { }
