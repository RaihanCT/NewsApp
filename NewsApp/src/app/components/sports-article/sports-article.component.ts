import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sports-article',
  templateUrl: './sports-article.component.html',
  styleUrls: ['./sports-article.component.scss']
})
export class SportsArticleComponent implements OnInit {
  
  articleId : number = -1;
  url : any;
  article : any = null;
  

  constructor(private newsService: NewsService, private activatedRoute: ActivatedRoute, private router: Router) {
    
   }


  ngOnInit(): void {
    this.url = this.router.url ;
    this.articleId = this.url.split("/")[2];
    console.log(this.articleId);

    this.newsService.getSportArticleById(this.articleId).subscribe((data) => {
      this.article = data;
    });

  }

}
