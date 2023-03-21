import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WelcomePageComponent} from "./welcome-page.component";
import {ReactiveFormsModule} from "@angular/forms";
import {WelcomePageRoutingModule} from "./welcome-page-routing.module";

@NgModule({
  declarations: [WelcomePageComponent],
  imports: [
    CommonModule,
    WelcomePageRoutingModule,
    ReactiveFormsModule
  ]
})
export class WelcomePageModule { }
