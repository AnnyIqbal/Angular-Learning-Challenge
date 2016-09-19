import { Component, Input } from '@angular/core';

@Component({
  selector: 'navMenu', 
  template: `
<!-- Navigation Tabs-->     
        <div>
            <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active">
                    <a href="#all" aria-controls="all" role="tab" data-toggle="tab">
                        <img src="app/Images/all.png" alt="all" class="img-responsive center-block" />
                    </a>
                </li>
                <li role="presentation" id="bTab">
                    <a href="#books" aria-controls="books" role="tab" data-toggle="tab">
                        <img src="app/Images/b1.png" alt="books" class="img-responsive center-block" />
                    </a>
                </li>
                <li role="presentation" id="cTab">
                    <a href="#cars" aria-controls="cars" role="tab" data-toggle="tab">
                        <img src="app/Images/c6.png" alt="cars" class="img-responsive center-block" />
                    </a>
                </li>
                <li role="presentation" id="mTab">
                    <a href="#mobiles" aria-controls="mobiles" role="tab" data-toggle="tab">
                       <img src="app/Images/m1.png" alt="mobiles" class="img-responsive center-block" />
                    </a>
                </li>
                <li id="button" role="presentation">
                    <a href="#form" type="button" aria-controls="form" role="tab" data-toggle="tab" (click)="fieldsEmptied();">
                        <!--class="btn btn-primary"-->
                        <img [src]="postAd" alt="Post Ad" /> 
                    </a>
                </li>
            </ul>

            <!--Tab Panes-->
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane fade in active" id="all">
                    <div id="p1">
                        <h1> All Ads </h1>
                    </div> 
                    <div id="p2" class="hidden">
                        <h1> All Ads </h1>
                    </div> 
                    <div id="p3" class="hidden">
                        <h1> All Ads </h1>
                    </div>                 
                </div>
                <div role="tabpanel" class="tab-pane fade" id="books">
                    <h1> Books </h1>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="cars">
                    <h1> Cars </h1>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="mobiles">
                    <h1> Mobiles </h1>
                </div>
            </div>
        </div>
<!--/Navigation Tabs-->`,
})

export class NavMenu { 
    postAd: string = "app/Images/posturad.png";

    fieldsEmptied(): void { // setting all form fields empty when nav bar's button PostAd is clicked
    let inputs = document.getElementsByTagName("input");
    for(let i = 0; i < inputs.length; i++) {
        (<HTMLInputElement>inputs[i]).value = '';
    }
    // de-selecting the select category option in form
    let select = (document.getElementById("category") as HTMLSelectElement).value = 'null';
}
}