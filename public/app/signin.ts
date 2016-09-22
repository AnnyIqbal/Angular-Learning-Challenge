import {Component} from '@angular/core';

@Component({
    selector : 'signin',
    templateUrl : 'app/signin.html',
    styles: [`
        .jumbotron {
            background-image: url("app/Images/bg10.png"); 
            background-size: 100% 100%; /* Image will stretch to cover entire content area */
            background-repeat: no-repeat;
            font-size: larger;
            color: white !important;
        }
    
    `]
})
export class SignIn{}