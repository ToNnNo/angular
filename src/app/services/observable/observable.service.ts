import { Injectable } from '@angular/core';
import {Observable, of, Subscriber} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() { }

  public getObservableNumbers(): Observable<number[]> {

    // next(), error(), complete()
    return Observable.create( (subscriber: Subscriber<number[]>) => {

      subscriber.next(this.numbers);

      setTimeout( () => {
        subscriber.next( this.numbers.map( num => num + 10) );
      }, 2000);

      setTimeout( () => {
        subscriber.next( this.numbers.map( num => (num + 10) * 10) );

        subscriber.complete();
        subscriber.error(new Error('Error'));
      }, 4000);

    });
  }

  public getObservableString(): Observable<string> {
    return Observable.create( (subscriber: Subscriber<string>) => {

      subscriber.next('Hello');

      setTimeout( () => {
        subscriber.next('World');
      }, 2000);

      setTimeout( () => {
        subscriber.next('and more');

        subscriber.complete();
      }, 4000);

    });
  }
}
