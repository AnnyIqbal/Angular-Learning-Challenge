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
        #footer div {
            display: inline;
        }
    `]
})
export class SignIn{
    users: {uname: string, pcode: number}[]; //yahan p list of all users assign krwado from firebase
   
    matchFound(user,code): boolean {
        for(let i=0; i<this.users.length; i++) {
            if((this.users[i].uname === user.toLowercase()) && (this.users[i].pcode === code)) {
                return true;
            }
            else {
                alert("Incorrect Username or Password!");
                return false;
            }
        }
    }

}