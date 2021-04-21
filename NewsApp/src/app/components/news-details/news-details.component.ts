import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  news : any[];
  // display : any[];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getArticles().subscribe((res : any[]) => {
      this.news = res;
    });
    // this.display = [this.news[0], this.news[1], this.news[2]];
  }

}