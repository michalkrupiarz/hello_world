import { Injectable, Inject } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SpotifyService {

  constructor(public http:Http) { }

  searchTrack(query:string){
    let params:string=[
      `q=${query}`,
      `type=track`
    ].join("&");
    console.log("This is quer ",query);
    let queryURL: string = `https://api.spotify.com/v1/search?${params}`;
    console.log("This is whole url ", queryURL );
    return this.http.request(queryURL).map(res=>res.json());
  }
}
