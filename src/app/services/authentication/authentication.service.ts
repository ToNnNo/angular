import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private static KEY = 'authentication';

  constructor() { }

  public login(): boolean {
    localStorage.setItem(AuthenticationService.KEY, 'N987DKJbcalk.azkjdaz');
    return true;
  }

  public state(): boolean {
    return localStorage.getItem(AuthenticationService.KEY) !== null;
  }

  public logout(): boolean {
    localStorage.removeItem(AuthenticationService.KEY);
    return false;
  }
}
