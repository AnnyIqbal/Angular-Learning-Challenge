import {Component} from '@angular/core';
import {NgFor} from '@angular/common';

@Component({
    selector: 'my-app',
    template: `<ul>
                    <li *ngFor="let item of names"> Hello {{ item }}</li>
               </ul>`
})
export class AppComponent { 
    names: string[];

    constructor() {
        this.names = ['Zia', 'Hira', 'Inam', 'Rehan', 'Tauha'];
    }
}