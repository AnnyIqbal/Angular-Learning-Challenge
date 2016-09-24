import {Component} from '@angular/core';

@Component({
    selector : 'footer-area',
    template : `<!-- footer area -->
        <div id="footer" class="container-fluid">
        <div class="row">
            <div class="col-sm-4">
                <a href="https://annyportfolio.firebaseapp.com/" data-toggle="Qurat ul Ann Iqbal" target="_blank"> About Developer </a> 
            </div>
            <div class="col-sm-2">
                <a href="Javascript:void(0)"> Terms & Conditions </a> 
            </div>
            <div class="col-sm-2">
                <a href="Javascript:void(0)"> Privacy Policy </a> 
            </div>
            <div class="col-sm-4">
                <a href="Javascript:void(0)"> All Rights Reserved, © 2016 </a>
            </div>
        </div> <!-- /.row -->
        </div>
        <br><br>`,
styles : [`
        #footer div {
            display: inline;
        }
`]
})
export class Footer{}
