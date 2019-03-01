import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipeComponent } from './custom-pipe.component';
import {PowerPipe} from '../../pipes/power/power.pipe';
import {PipelindromePipe} from '../../pipes/pipelindrome/pipelindrome.pipe';

describe('CustomPipeComponent', () => {
  let component: CustomPipeComponent;
  let fixture: ComponentFixture<CustomPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CustomPipeComponent,
        PowerPipe,
        PipelindromePipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
