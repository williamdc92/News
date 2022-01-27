import { Component, OnInit } from '@angular/core';
import { GetnewsService } from 'src/providers/Getnews/getnews.service';
import {RootObject,Article} from 'src/providers/Getnews/getnews.service'

@Component({
  selector: 'app-get-filtered-news',
  templateUrl: './get-filtered-news.component.html',
  styleUrls: ['./get-filtered-news.component.scss'],
})
export class GetFilteredNewsComponent implements OnInit {

  constructor(private getnews:GetnewsService) { }

  filtered : Article[] = [];
  url: string = "audi"
  searchTerm = '';

  
  searchEventFired() {
    this.url = this.searchTerm;
   
    this.ngOnInit()
  }



 async ngOnInit() {
    this.filtered = (await this.getnews.GetFilteredNews(this.url)).articles;
    console.log(this.filtered);
  }

}
