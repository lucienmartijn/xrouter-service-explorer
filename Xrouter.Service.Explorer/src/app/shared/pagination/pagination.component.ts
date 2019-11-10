import { 
	Component,
	Input, 
	Output, 
	EventEmitter }     from '@angular/core';
import { OnChanges } from '@angular/core';

@Component({
	selector: 'pagination',
    template: `
    <nav *ngIf="totalItems > pageSize" aria-label="Course navigation">
        <ul class="pagination">
            <li class="page-item" [class.disabled]="currentPage == 1" >
                <a class="page-link" (click)="previous()" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li class="page-link" [class.active]="currentPage == page" *ngFor="let page of pages" (click)="changePage(page)">
                <a>{{ page }}</a>
            </li>
            <li class="page-link" [class.disabled]="currentPage == pages.length">
                <a (click)="next()" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>  
`
})
export class PaginationComponent implements OnChanges {
  	@Input('total-items') totalItems;
	@Input('page-size') pageSize = 10;
	@Output('page-changed') pageChanged = new EventEmitter();
	pages: any[];
	pagesCount:number; 
	currentPage:number;

	ngOnChanges(){
		this.currentPage = 1;
		this.changePageRange(this.currentPage);
	}

	changePageRange(page:number){
		let startPage:number; 
		let endPage:number;
		this.pagesCount = Math.ceil(this.totalItems / this.pageSize); 
		if (this.pagesCount <= 5) {
            startPage = 1;
            endPage = this.pagesCount;
        } else {
            if (page <= 3) {
             	startPage = 1;
            	endPage = 5;
            } else if (page + 1 >= this.pagesCount) {
                startPage = this.pagesCount - 4;
                endPage = this.pagesCount;
            } else {
                startPage = page - 2;
                endPage = page + 2;
            }
		}

		this.pages = [];
		for (var i = startPage; i <= endPage; i++)
			this.pages.push(i);
		
	}

	changePage(page){

		this.currentPage = page;
		this.changePageRange(this.currentPage);
		this.pageChanged.emit(page);
	}

	previous(){
		if (this.currentPage == 1)
			return;

		this.currentPage--;
		this.changePageRange(this.currentPage);
		this.pageChanged.emit(this.currentPage);
	}

	next(){
		if (this.currentPage == this.pages.length)
			return; 
		
		this.currentPage++;
		this.changePageRange(this.currentPage);
		this.pageChanged.emit(this.currentPage);
	}
}