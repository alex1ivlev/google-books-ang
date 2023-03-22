import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BookItem} from "../../../models/googleResponse";
import {Observable} from "rxjs";
import {WishlistService} from "../../../services/wishlist.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit{

  currentBook$: Observable<BookItem>;
  wishlist$: Observable<BookItem[]>;

  @Input() book: BookItem;

  @Output() closeDialog = new EventEmitter<void>();

  @Output() addToList = new EventEmitter<void>();

  @Output() removeFromList = new EventEmitter<void>();

  constructor(
    private wishlistService: WishlistService
  ) {
  }

  ngOnInit() {
    this.wishlistService.populate()
    this.wishlist$ = this.wishlistService.books$;
  }

  close() {
    this.closeDialog.emit();
  }

  add() {
    this.wishlistService.addToWishlist(this.book)
   }

   remove(){
     this.wishlistService.removeBookFromWishlist(this.book)
   }

   checkIfExistsInArray(arr: BookItem[], b: BookItem) {
    return arr.find(i=>i.id == b.id)
   }
}
