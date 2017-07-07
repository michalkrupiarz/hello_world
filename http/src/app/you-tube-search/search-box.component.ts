import { Component, OnInit,EventEmitter,Output,ElementRef } from '@angular/core';
import {SearchResult} from '../search-result';
import {YouTubeSearchService} from './you-tube-search.service';
import {Observable} from 'rxjs/RX';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.html',
  styleUrls: ['./you-tube-search.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtube: YouTubeSearchService, private el:ElementRef) { }

  ngOnInit():void {
    Observable.fromEvent(this.el.nativeElement,'keyup')
    .map((e:any)=>e.target.value)
    .filter((text:string)=>text.length>1)
    .debounceTime(250)
    .do(()=> this.loading.emit(true))
    .map((query: string)=> this.youtube.search(query))
    .switch()
    .subscribe(
      (results:SearchResult[])=>{
        this.loading.emit(false);
        this.results.emit(results);
      },
      (err:any)=>{
        console.log (err);
        this.loading.emit(false);
      },
      ()=>{
        this.loading.emit(false);
      }
    )
  }

}
