import { NgModule } from '@angular/core';
import {WelcomePageComponent} from "./welcome-page.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{ path: '', component: WelcomePageComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomePageRoutingModule { }
