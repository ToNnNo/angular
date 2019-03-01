import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../classes/user';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<Array<User>> {

    return this.http.get<Array<User>>(`${this.url}/users/`).pipe(
      map( (users: User[]) => {
        return users.map( (user: User) => {
          return new User( user );
        } );
      } )
    );

  }

  public methodAllow() {
    return this.http.options(`${this.url}/users/`);
  }

  public existingResource() {
    return this.http.head(`${this.url}/users/`);
  }
}
