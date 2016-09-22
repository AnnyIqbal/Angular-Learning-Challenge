import {Component} from '@angular/core';
import {NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import {Books, Cars, Mobiles} from './adObjects';

@Component({
    selector: 'for',
    template: `
    <ul [ngSwitch]="choice">
                    <li *ngSwitchCase="Books">Book area or tab </li>
                    <li *ngSwitchCase="Cars">Second choice</li>
                    <li *ngSwitchCase="Mobiles">Third choice</li>
                    <li *ngSwitchDefault>Default choice</li>
                </ul>
            `,
    styles: [`
    li {
        list-style-type: none;
    }
    `]
})
export class Loop { 
    choice: string;
    ad : any[] = [ // hard coded array for ad listings
        {x : new Books("HTML & CSS", "Jon Duckett", "HTML & CSS", 200, "app/Images/htmlcss.png")},
        {x : new Books("Git Essentials", "Ferdinando Santacroce", "Git", 700, "app/Images/git.png")},
        {x : new Mobiles("J1-Ace", "Samsung", "white", 4.3, 19000, "app/Images/j1.jpg")},
        {x : new Books("A Smarter Way To Learn JavaScript", "Mark Mayers", "JavaScript", 500, "app/Images/js.png")},
        {x : new Cars("Vitz", "Toyota", 2017, 1200, "black", 500000, "app/Images/vitz.jpg")},
        {x : new Cars("Corolla", "Toyota", 2016, 1500, "white", 540000, "app/Images/corolla.jpg")},
        {x : new Cars("CheryQQ", "Santro", 2016, 1000, "red", 205000, "app/Images/cheryqq.jpg")},
        {x : new Mobiles("Noir S1", "Q-Mobile", "black", 5, 11000, "app/Images/S1.png")},
        {x : new Mobiles("E8-2", "htc", "black", 5, 27000, "app/Images/htc.jpg")}
    ]; 

    select() : string{
    for(let i=0; i<this.ad.length; i++){
    if(this.ad[i].x.cName == "Books") {
        return "Books";
    }
    else if(this.ad[i].x.cName == "Cars") {
        return "Cars";
    }
    else if(this.ad[i].x.cName == "Mobiles") {
        return "Mobiles";
    }
    }
} 
    constructor(){
        this.choice = this.select();
    }
}