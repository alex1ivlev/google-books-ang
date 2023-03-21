import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchPageComponent} from "./search-page.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SearchPageRoutingModule} from "./search-page-routing.module";
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [SearchPageComponent, BookComponent],
  exports: [
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    SearchPageRoutingModule,
    ReactiveFormsModule
  ]
})
export class SearchPageModule { }
