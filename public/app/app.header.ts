import { Component, Input } from '@angular/core';

@Component({
  selector: 'header', 
  template: `<!--Jumbotron from bootstrap-->
            <div id="header" class="jumbotron"> 
                <br /><br /><br /><br /><br />
                <h1>Classified App</h1>
            </div>`,
  styles: [`
h1 {
    text-transform: uppercase;
    text-align: center;
    vertical-align: baseline;
    font-family: "Old English Text", Georgia, 'Times New Roman', Times, serif;
    /*background-color: rgba(128,128,128,0.25);*/
}
.jumbotron {
    background-image: url("Images/bg10.png"); 
    background-size: 100% 100%; /* Image will stretch to cover entire content area */
    background-repeat: no-repeat;
    font-size: larger;
    color: white;
    /*border: 2px solid black;*/
}
`]
})
export class Jumbotron { }