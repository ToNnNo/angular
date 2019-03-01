import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {User} from '../../classes/user';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  users: Array<User> = [];

  constructor(private service: UserService) { }

  ngOnInit() {
  }

  public getUsers(): void {
    this.service.getAllUsers().subscribe( (users: Array<User>) => {
      console.log(users);
      this.users = users;
    });
  }

}
