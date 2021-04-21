import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

// import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {

  news : any[];

  constructor(private newsService : NewsService, private router: Router) { }

  ngOnInit(): void {
    this.newsService.getAllArticles().subscribe((res : any[]) => {
      this.news = res;
    })
  }

  deleteById(id){
    this.newsService.deleteNewsArticleById(id).subscribe((res) => {
    })
    window.location.reload();
    console.log(id);
  }

}
