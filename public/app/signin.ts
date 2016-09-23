import {Component} from '@angular/core';
import {Footer} from './footer';

@Component({
    selector : 'signin',
    templateUrl : 'app/signin.html',
    styles: [`
        .jumbotron {
            background-image: url("Images/bg10.png"); 
            background-size: 100% 100%; /* Image will stretch to cover entire content area */
            background-repeat: no-repeat;
            color: black !important;
            height: 400px;
        }
        h1 {
            font-size: 84px;
        }
        h2 {
            font-size: 38px;
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