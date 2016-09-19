import { Component, Input } from '@angular/core';

@Component({
  selector: 'header', 
  template: `<!--Jumbotron from bootstrap-->
            <div id="header" class="jumbotron"> 
                <br /><br /><br /><br /><br />
                <h1>Classified App</h1>
            </div>`
})
export class Jumbotron { }