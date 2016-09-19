import { Component } from '@angular/core';

@Component({
  selector: 'pagination', 
  template : `<nav aria-label="Page navigation"> <!-- pagination list -->
                        <ul class="pagination">
                            <!--<li><span><span aria-hidden="true">&laquo;</span></span></li>-->
                            <li class="active"><a href="#p1" (click)="activatePage('p1', this);">1</a></li>
                            <li><a href="#p2" (click)="activatePage('p2', this);">2</a></li>
                            <li><a href="#p3" (click)="activatePage('p3', this);">3</a></li>
                            <!--<li><span><span aria-hidden="true">&raquo;</span></span></li>-->
                        </ul>
                    </nav> <!-- /pagination list -->`
})
export class Pagination {
    activatePage(id: string, tag: HTMLElement): void { // pagination activation function
    switch(id) {
        case 'p1': {
            tag.parentElement.setAttribute("class", "active"); // set .active for #p1
            tag.parentElement.nextElementSibling.removeAttribute("class"); // remove .active from #p2
            tag.parentElement.nextElementSibling.nextElementSibling.removeAttribute("class"); // remove .active from #p3

            document.getElementById(id).className = "show"; // set .show for #p1
            document.getElementById("p2").className = "hidden"; //hide #p2
            document.getElementById("p3").className = "hidden"; //hide #p3
            break;
        }
         case 'p2': {
            tag.parentElement.setAttribute("class", "active"); // set .active for #p2
            tag.parentElement.nextElementSibling.removeAttribute("class"); // remove .active from #p3
            tag.parentElement.previousElementSibling.removeAttribute("class"); // remove .active from #p1

            document.getElementById(id).className = "show"; // set .show for #p2
            document.getElementById("p1").className = "hidden"; //hide #p1
            document.getElementById("p3").className = "hidden"; //hide #p3
            break;
        }
         case 'p3': {
            tag.parentElement.setAttribute("class", "active"); // set .active for #p3
            tag.parentElement.previousElementSibling.removeAttribute("class"); // remove .active from #p2
            tag.parentElement.previousElementSibling.previousElementSibling.removeAttribute("class"); // remove .active from #p3

            document.getElementById(id).className = "show"; // set .show for #p3
            document.getElementById("p1").className = "hidden"; //hide #p1
            document.getElementById("p2").className = "hidden"; //hide #p2
            break;
        }
        default: {
            alert("Error!");
        }
    }
}    
}