import { Component } from '@angular/core';
import {Ads, Books} from './adObjects';

@Component({
selector: 'oneBook',
template: `<div class="panel panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title"> {{this.ad[0].x.subject}} </h3>
                        </div>
                        <div class="panel-body row">
                            <div class= "col-sm-4">
                                <img src={{this.ad[0].x.image}} alt="book" height="100" width="100" />
                            </div>
                            <div class="col-sm-8"> {{this.ad[0].x.display()}} </div>
                        </div>
                        <div class="panel-footer text-right"> <strong>Price: Rs. {{this.ad[0].x.price}} /-</strong> </div>
                    </div>`
})
export class OneBook {} 