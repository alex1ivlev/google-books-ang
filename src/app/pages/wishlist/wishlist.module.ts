import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {WishlistComponent} from "./wishlist.component";
import {WishlistRoutingModule} from "./wishlist-routing.module";
import {SearchPageModule} from "../search-page/search-page.module";

@NgModule({
  declarations: [WishlistComponent],
  exports: [
    WishlistComponent
  ],
  imports: [
    CommonModule,
    WishlistRoutingModule,
    ReactiveFormsModule,
    SearchPageModule
  ]
})
export class WishlistModule { }
