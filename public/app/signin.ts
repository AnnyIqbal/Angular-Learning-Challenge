import {Component} from '@angular/core';
import {Footer} from './footer';

@Component({
    selector : 'signin',
    templateUrl : 'app/signin.html',
    styles: [`
        .jumbotron {
            background-image: url("Images/5.jpg");
            background-size: 100% 100%; /* Image will stretch to cover entire content area */
            background-repeat: no-repeat;
            color: white !important;
            height: 500px;
        }
        h1 {
            font-size: 84px;
            font-family: "Old English Text MC";
        }
       #tagline {
            font-size: 38px;
            font-family: Calibri, Arial, Helvetica, Verdana, sans-serif;
            font-weight: light;
            text-transform: lowercase;
        }
        form input {
            padding: 5px;
        }
    `]
})
export class SignIn{
    users: {uname: string, pcode: number}[]; //yahan p list of all users assign krwado from firebase
 
    register(name, code) {
        this.users.push(name, code);
    }

    matchFound(user,code): boolean {
        for(let i=0; i<this.users.length; i++) {
            if((this.users[i].uname === user.toLowercase()) && (this.users[i].pcode === code)) {
                alert("Welcome " + user + "!");
                return true;
            }
            else {
                alert("Incorrect Username or Password!");
                return false;
            }
        }
    }

}