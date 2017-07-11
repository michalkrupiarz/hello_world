import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {LocationStrategy,
  HashLocationStrategy,
  APP_BASE_HREF} from '@angular/common';

import {SpotifyService} from './spotify.service';
import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { SearchComponent } from './search/search.component';
import { TracksComponent } from './tracks/tracks.component';

const routes:Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'artists',component: ArtistComponent},
  {path:'tracks',component: TracksComponent},
  {path:'albums',component:AlbumComponent},
  {path:'search', redirectTo:''}
]

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    ArtistComponent,
    SearchComponent,
    TracksComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
