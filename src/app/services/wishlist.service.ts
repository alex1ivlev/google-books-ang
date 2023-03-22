import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {BookItem} from "../models/googleResponse";

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private localStorageKey = 'wishlist'
  private _books$ = new BehaviorSubject<BookItem[]>([]);
  public books$ = this._books$.asObservable();

  constructor() {
  }

  setWishlist(books: BookItem[]) {
    if (books == null) {
      books = []
    }
    const jsonData = JSON.stringify(books)
    localStorage.setItem(this.localStorageKey, jsonData)
    this._books$.next(books)
  }

  populate(): void {
    const data = JSON.parse(localStorage.getItem(this.localStorageKey))
    if (data != null) {
      this._books$.next(data)
    }
  }

  removeBookFromWishlist(book: BookItem) {
    const data = JSON.parse(localStorage.getItem(this.localStorageKey))
    this.setWishlist(data.filter(b => b.id !== book.id))
  }

  addToWishlist(book: BookItem) {
    let data = JSON.parse(localStorage.getItem(this.localStorageKey))
    if (data == null) {
      data = []
    }
    console.log(book)
    console.log(data)

    data = data.filter(b => b.id !== book.id)
    data.push(book)
    console.log(data)
    this.setWishlist(data)
  }
}
