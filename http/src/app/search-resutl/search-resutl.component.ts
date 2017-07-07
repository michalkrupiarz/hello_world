import { Component, OnInit, Input } from '@angular/core';
import {SearchResult} from '../search-result';
@Component({
  selector: 'app-search-resutl',
  templateUrl: './search-resutl.component.html',
  styleUrls: ['./search-resutl.component.css']
})
export class SearchResutlComponent implements OnInit {
  @Input() result: SearchResult;
  constructor() { }

  ngOnInit() {
  }

}
