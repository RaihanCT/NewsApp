import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  articleData = {
    title : '',
    description : '',
    url : '',
    imageUrl : '',
    category: 'news',
    publishedAt : ''
  }

  constructor(private news : NewsService) { }

  ngOnInit(): void {
  }

  createArticle() {
    this.news.createArticle(this.articleData)
    window.location.reload();
  }


}
