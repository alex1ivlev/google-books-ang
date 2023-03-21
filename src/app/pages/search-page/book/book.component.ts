import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BookItem} from "../../../models/googleResponse";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input() book: BookItem;

  @Output() dismissDialog = new EventEmitter<void>();

  close() {
    this.dismissDialog.emit();
  }
}
