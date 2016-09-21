import { Component, Input } from '@angular/core';
import {NgFor} from '@angular/common';

@Component({
  selector: 'navMenu', 
  templateUrl: 'app/app.navMenu.html'
})

export class NavMenu { 

    postAd: string = "app/Images/posturad.png";

    fieldsEmptied(): void { // setting all form fields empty when nav bar's button PostAd is clicked

        let inputs = document.getElementsByTagName("input");
        for(let i = 0; i < inputs.length; i++) {
            (<HTMLInputElement>inputs[i]).value = '';
        }
        // de-selecting the select category option in form
        let select = (document.getElementById("category") as HTMLSelectElement).value = 'null';
    }
}