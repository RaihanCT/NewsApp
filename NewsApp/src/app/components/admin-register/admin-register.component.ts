import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.scss']
})
export class AdminRegisterComponent implements OnInit {
  constructor(private user: UserService) { }

  registerData = {
    name : '',
    email : '',
    password : ''

  }

  ngOnInit(): void {
  }

  registerUser(){
    this.user.register(this.registerData)
    this.resetForm()
  }

  resetForm(){
    this.registerData.name = '';
    this.registerData.email = '';
    this.registerData.password = '';
  }

}
