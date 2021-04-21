import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http : HttpClient,  private router: Router) { }

  getAllArticles(){
    return this.http.get("http://localhost:3000/allNewsArticles")
  }

  getArticles(){
    return this.http.get("http://localhost:3000/newsArticles");
  }

  deleteNewsArticleById(id){
    return this.http.get("http://localhost:3000/delNewsArticle/" + id);
  }

  getSportsArticle(){
    return this.http.get("http://localhost:3000/sportsArticles");
  }

  getSportArticleById(id){
    return this.http.get("http://localhost:3000/sportsArticles/"+id);
  }

  createArticle(model) {
    return this.http.post("http://localhost:3000/news", model).subscribe((response : any) => {
      this.router.navigateByUrl("/admin-create-news");
      return response
    })
  }
}
