import { Component } from '@angular/core';
import {Ads, Cars} from './adObjects';

@Component({
  selector: 'oneCar',
  template: `<div class="panel panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title"> item.x.name </h3>
                        </div>
                        <div class="panel-body row">
                            <div class= "col-sm-4">
                                <img src=item.x.image alt="car" height="100" width="100" />
                            </div>
                            <div class="col-sm-8"> item.x.display() </div>
                        </div>
                        <div class="panel-footer text-right"> <strong>Price: Rs. item.x.price/-</strong> </div>
                    </div>`
})
export class OneCar {}