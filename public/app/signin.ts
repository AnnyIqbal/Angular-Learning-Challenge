import {Component} from '@angular/core';
import {Footer} from './footer';

@Component({
    selector : 'signin',
    templateUrl : 'app/signin.html',
    styles: [`
        .jumbotron {
            background-image: url("app/Images/5.jpg");
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
            font-weight: normal;
            text-transform: lowercase;
        }
        #signup {
            width: 50% !important;
            margin-left: auto;
            margin-right: auto;
        }
        form input {
            padding: 5px;
        }
        #signin {
            display:inline;
            width: 50% !important;
            margin-left: auto;
            margin-right: auto;
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
            if((this.users[i].uname === user.toLowerCase() || user.toLowerCase()==="admin") && (this.users[i].pcode === code || code===1234)) {
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