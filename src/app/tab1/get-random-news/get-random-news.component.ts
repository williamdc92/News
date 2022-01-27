import { Component, OnInit } from '@angular/core';
import { GetnewsService } from 'src/providers/Getnews/getnews.service';
import {RootObject,Article} from 'src/providers/Getnews/getnews.service'

@Component({
  selector: 'app-get-random-news',
  templateUrl: './get-random-news.component.html',
  styleUrls: ['./get-random-news.component.scss'],
})
export class GetRandomNewsComponent implements OnInit {

  constructor(private getnews:GetnewsService) { }

  results : Article[] = [];




  async ngOnInit() {
    this.results = (await this.getnews.GetNews()).articles;
   

  }

}
