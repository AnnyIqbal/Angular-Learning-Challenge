import { Component, Input } from '@angular/core';
import {Header} from './app.header';
import {NavMenu} from './app.navMenu';
import {Loop} from './forloop';
import {formInput} from './app.forminput';
import {Footer} from './footer';

@Component({
  selector: 'index1', 
  template: ` 
    <header-area></header-area>
    <navMenu></navMenu>
    <for></for>
    <footer-area></footer-area>`
})
export class Index1 { }