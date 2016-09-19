import { Component } from '@angular/core';

@Component({
  selector: 'pagination', 
  template : `<nav aria-label="Page navigation"> <!-- pagination list -->
                        <ul class="pagination">
                            <!--<li><span><span aria-hidden="true">&laquo;</span></span></li>-->
                            <li class="active"><a href="#p1" onclick="activatePage('p1', this);">1</a></li>
                            <li><a href="#p2" onclick="activatePage('p2', this);">2</a></li>
                            <li><a href="#p3" onclick="activatePage('p3', this);">3</a></li>
                            <!--<li><span><span aria-hidden="true">&raquo;</span></span></li>-->
                        </ul>
                    </nav> <!-- /pagination list -->`
})
export class Pagination {}