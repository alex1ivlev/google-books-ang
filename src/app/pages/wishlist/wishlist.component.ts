import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {WishlistService} from "../../services/wishlist.service";
import {Observable} from "rxjs";
import {BookItem} from "../../models/googleResponse";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishlistComponent implements OnInit{

  wishList$: Observable<BookItem[]>;

  constructor(
    private wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.wishlistService.populate()
    this.wishList$ = this.wishlistService.books$
  }

  getWishlist(){
    this.wishlistService.populate();
  }
}
