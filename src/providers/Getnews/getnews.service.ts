import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Source {
  id: string;
  name: string;
}

export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

export interface RootObject {
  status: string;
  totalResults: number;
  articles: Article[];
}

@Injectable({
  providedIn: 'root'
})


export class GetnewsService {

  

  constructor(private http: HttpClient) { this.GetNews}

  

  apiKey = "YOUR_API_KEY_FROM_NEWSAPI.ORG"

  GetNews () {
  return this.http.get<RootObject>("https://newsapi.org/v2/everything?domains=thenextweb.com&apiKey="+this.apiKey, {}).toPromise()};

  GetFilteredNews(url: string) {
  
  return this.http.get<RootObject>("https://newsapi.org/v2/everything?q="+url+"&apiKey="+this.apiKey, {}).toPromise()};  

  GetCategorizedNews(type:string) {
  return this.http.get<RootObject>("https://newsapi.org/v2/top-headlines?country=us&category="+type+"&apiKey="+this.apiKey, {}).toPromise()};

  }

  
  

  

