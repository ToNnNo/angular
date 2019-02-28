import { Component, OnInit } from '@angular/core';
import {ObservableService} from '../../services/observable/observable.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  numbers$: number[];
  message: string;

  disabled = false;

  info$: string;

  constructor(private service: ObservableService) { }

  ngOnInit() {

    this.service.getObservableString().subscribe( (info: string) => {
      this.info$ = info;
    });

  }

  public getMultiNumber(): void {
    this.numbers$ = [];
    this.message = null;
    this.disabled = true;

    this.service.getObservableNumbers().subscribe( (numbers: number[]) => {
      this.numbers$ = numbers;

    }, (error: Error) => {
      console.log(error.message);
    }, () => {
      this.message = 'Synchronisation terminée';
      this.disabled = false;
    });

  }

}
