import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  flag = false;
  constructor(private http: HttpClient) { }

 async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    const token = window.localStorage.getItem("access-token");

    if (token) {
      let header = {
        headers: new HttpHeaders().set('Authorization', token)
      };

      await this.http.get("http://localhost:3000/verify", header).toPromise();

      return true;
    } else {
      return false;
    }
  }
}
