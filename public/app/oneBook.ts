import { Component } from '@angular/core';
import {Ads, Books} from './adObjects';

@Component({
selector: 'oneBook',
template: `<div class="panel panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title"> {{item.x.subject}} </h3>
                        </div>
                        <div class="panel-body row">
                            <div class= "col-sm-4">
                                <img src={{item.x.image}} alt="book" height="100" width="100" />
                            </div>
                            <div class="col-sm-8"> 
                                <strong> Title: </strong> {{item.x.title}} <br />
                                <strong> Author: </strong> {{item.x.author}} <br />
                                <strong> Subject: </strong> {{item.x.subject}} 
                            </div>
                        </div>
                        <div class="panel-footer text-right"> <strong>Price: Rs. {{item.x.price}} /-</strong> </div>
                    </div>`
})
export class OneBook {} 