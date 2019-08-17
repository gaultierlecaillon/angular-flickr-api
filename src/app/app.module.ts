import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchListComponent } from './search/search-list/search-list.component';
import {FormsModule} from '@angular/forms';
import {SearchService} from './services/search.service';
import {HttpClientModule} from '@angular/common/http';
import { SearchDetailComponent } from './search/search-detail/search-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchListComponent,
    SearchDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
