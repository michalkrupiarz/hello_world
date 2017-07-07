import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { MoreHttpRequestsComponent } from './more-http-requests/more-http-requests.component';
import { YouTubeSearchComponent } from './you-tube-search/you-tube-search.component';
import { SearchResutlComponent } from './search-resutl/search-resutl.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import {youTubeSearchInjectables} from './you-tube-search/you-tube-search.injectables';
import {SearchBoxComponent} from './you-tube-search/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    MoreHttpRequestsComponent,
    YouTubeSearchComponent,
    SearchResutlComponent,
    SearchComponentComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [youTubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
