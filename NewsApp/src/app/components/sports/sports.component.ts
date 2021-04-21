import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  articles: any[];

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit(): void {
    this.newsService.getSportsArticle().subscribe((response: any[]) => {
      this.articles = response;
    })
  }

  navigateTo(articleId){
    this.router.navigate(['sports-article/', articleId]);
  }

  // import service and create interface, 
  //store data in database and create method to get sports articles

}
