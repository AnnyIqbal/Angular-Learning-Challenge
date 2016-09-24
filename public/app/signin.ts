import {Component} from '@angular/core';
import {Jumbotron} from './app.header';
import {NavMenu} from './app.navMenu';
import {Loop} from './forloop';
import {formInput} from './app.forminput';
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
            width: 100% !important;
            margin-left: auto;
            margin-right: auto;
        }
        form input {
            padding: 5px;
        }
        #signin input {
            display:inline;
            // width: 100% !important;
            // margin-left: auto;
            // margin-right: auto;
        }
    `]
})
export class SignIn{
    users: {uname: string, email: string, pcode: number}[]; //yahan p list of all users assign krwado from firebase

    isSignedIn:boolean = false;
 
    register(name, email, code) {
        if(this.isNotEmpty("name") && this.isNotEmpty("email") && this.isNotEmpty("code")) { 
            this.users.push(name, email, code);
            alert("Thank you for Registration! "+ name);
            this.isSignedIn = true;
        }
        else {
            alert("Please fill out the fileds!");
            this.isSignedIn = false;
        }
    }
    isNotEmpty(id: string): boolean { // check whether an input field is empty
        let check: HTMLInputElement = document.getElementById(id) as HTMLInputElement;
        if(check.toString().length === 0) {
            alert("This is a required field!"); //throw error
            check.focus(); // set focus on the field
        }
        else {
            return true;
        }
    }
    matchFound(user,code): boolean {
        let flag =false;
        for(let i=0; i<this.users.length; i++) {
            if((this.users[i].uname === user.toLowerCase() || user.toLowerCase()==="admin") && (this.users[i].pcode === code || code===1234)) {
                alert("Welcome " + user + "!");
                flag = true;
            }
            else {
                alert("Incorrect Username or Password!");
                flag = false;
            }
        }
        this.isSignedIn = flag? true:false;
        return flag;
    }

}