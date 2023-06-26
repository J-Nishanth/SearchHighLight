import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  items = [{ name: 'ko' }, { name: 'lo' }, { name: 'kok' }];
  searchtext: string;
  searc: string;
  constructor(private high: SearchService) {}
  ngOnInit(): void {}

  search() {
    this.high.searchTerm = this.searchtext;
  }
}
