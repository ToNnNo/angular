import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  state: boolean;

  constructor(private authentication: AuthenticationService) { }

  ngOnInit() {
    this.state = this.authentication.state();
  }

  public login() {
    this.state = this.authentication.login();
  }

  public logout() {
    this.state = this.authentication.logout();
  }

}
