import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() totalItems: number = 1302;
  @Output() onChangeOffset = new EventEmitter<number>();
  offset = 0;
  limit = 10;

  nextPage(): void {
    if (this.offset + this.limit < this.totalItems) {
      this.offset += this.limit;
      this.onChangeOffset.emit(this.offset);
    }
  }

  previousPage(): void {
    if (this.offset - this.limit >= 0) {
      this.offset -= this.limit;
      this.onChangeOffset.emit(this.offset);

    }
  }

  setPage(pageNumber: number): void {
    this.offset = (pageNumber - 1) * this.limit;
    this.onChangeOffset.emit(this.offset);
  }

  getPageNumbers(): number[] {
    const pages = [];
    const totalPages = Math.ceil(this.totalItems / this.limit);
    const maxPages = 5; // Exibir apenas 5 primeiras páginas
    let startPage = 1;
    if (totalPages > maxPages && this.offset + this.limit < this.totalItems) {
      startPage = Math.max(1, Math.min(totalPages - maxPages + 1, Math.floor(this.offset / this.limit) + 1));
    }
    const endPage = Math.min(totalPages, startPage + maxPages - 1);
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }

}
