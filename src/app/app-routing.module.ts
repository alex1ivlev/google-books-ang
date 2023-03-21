import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

const routes: Routes= [
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome-page/welcome-page.module').then(m=> m.WelcomePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search-page/search-page.module').then(m=> m.SearchPageModule)
  },
  {
    path: '**',
    redirectTo: 'welcome'
  }
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
