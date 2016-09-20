import {Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {Ads, Books, Cars, Mobiles} from './app.navMenu';

@Component({
    selector: 'for',
    template: `<ul>
                    <li *ngFor="let item of ad">
                        {{item}} +'.display()'
                    </li>
               </ul>`,
    styles: [`
    li {
        list-style-type: none;
    }
    `]
})
export class Loop { 
    
    ad : any[] = [ // hard coded array for ad listings
    {x : new Books("HTML & CSS", "Jon Duckett", "HTML & CSS", 200, "Images/htmlcss.png")},
    {x : new Books("Git Essentials", "Ferdinando Santacroce", "Git", 700, "Images/git.png")},
    {x : new Mobiles("J1-Ace", "Samsung", "white", 4.3, 19000, "Images/j1.jpg")},
    {x : new Books("A Smarter Way To Learn JavaScript", "Mark Mayers", "JavaScript", 500, "Images/js.png")},
    {x : new Cars("Vitz", "Toyota", 2017, 1200, "black", 500000, "Images/vitz.jpg")},
    {x : new Cars("Corolla", "Toyota", 2016, 1500, "white", 540000, "Images/corolla.jpg")},
    {x : new Cars("CheryQQ", "Santro", 2016, 1000, "red", 205000, "Images/cheryqq.jpg")},
    {x : new Mobiles("Noir S1", "Q-Mobile", "black", 5, 11000, "Images/S1.png")},
    {x : new Mobiles("E8-2", "htc", "black", 5, 27000, "Images/htc.jpg")}
]; // objects are pushed dynamically whenever a user posts ad

}