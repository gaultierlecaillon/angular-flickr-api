import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchDetailComponent} from './search/search-detail/search-detail.component';
import {SearchListComponent} from './search/search-list/search-list.component';


const routes: Routes = [
  {
    path: '',
    component: SearchListComponent
  },
  { path: 'search/:id/:secret', component: SearchDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
