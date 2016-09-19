import {Component} from '@angular/core';
import {NgFor} from '@angular/common';

@Component({
    selector: 'for',
    template: `<ul>
                    <li *ngFor="let item of names"> Hello {{ item }}</li>
               </ul>`,
    styles: [`
    li {
        list-style-type: none;
    }
    `]
})
export class Loop { 
    names: string[];

    constructor() {
        this.names = ['Zia', 'Hira', 'Inam', 'Rehan', 'Tauha'];
    }
}