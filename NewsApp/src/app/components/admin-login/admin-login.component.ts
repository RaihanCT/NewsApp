import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {


  loginData = {
    email : "",
    password : ""
  }


  constructor(private user: UserService) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.user.login(this.loginData)
  }

  resetForm(){
    this.loginData.email = '';
    this.loginData.password = ''
  }
}
