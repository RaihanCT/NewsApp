import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  login(model) {
    return this.http.post("http://localhost:3000/admin-login", model)
      .subscribe((response: any) => {

        window.localStorage.setItem("access-token", response.accessToken)

        this.router.navigateByUrl("/admin-create-news");
        return response
      }, () => {
        this.router.navigateByUrl("/admin-login");
      })
  }

  register(model) {
    return this.http.post("http://localhost:3000/admin-register", model)
      .subscribe((response: any) => {
        this.router.navigateByUrl("/admin-login");
        return response;
      }, () => {
        this.router.navigateByUrl("/admin-login");
      })
  }

  getUserInfo() : any {
    let token = window.localStorage.getItem("access-token")
    let obj = jwt_decode(token)
    return obj;
  }

  logout() {
    window.localStorage.clear();
  }
}
