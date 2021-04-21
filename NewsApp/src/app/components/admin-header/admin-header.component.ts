import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  model = {
    name : '',
    email: ''
  }

  constructor(private user : UserService) { }

  ngOnInit(): void {
    this.model = this.user.getUserInfo();
  }

  logout() {
    this.user.logout();
  }
}
