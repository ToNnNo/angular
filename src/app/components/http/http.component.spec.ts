import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpComponent } from './http.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {User} from '../../classes/user';
import {UserService} from '../../services/user/user.service';
import {of} from 'rxjs';

describe('HttpComponent', () => {
  let component: HttpComponent;
  let fixture: ComponentFixture<HttpComponent>;

  const mockUsers: Array<User> = [
    new User( {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      phone: '06 118 218 00',
      address: {
        city: 'Lille',
        street: 'Grand Place',
        suite: '16',
        zipcode: '59800'
      }
    })
  ];

  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    userService = TestBed.get(UserService);
    spyOn(userService, 'getAllUsers').and.returnValue(of(mockUsers));
    component.getUsers();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getAllUsers should be called', () => {
    expect(userService.getAllUsers).toHaveBeenCalled();
  });

  it('getUsers should return 1 user', () => {
    expect(component.users.length).toEqual(1);
  });

  it('user[0].name should be "John Doe"', () => {
    expect(component.users[0].name).toEqual('John Doe');
  });
});
