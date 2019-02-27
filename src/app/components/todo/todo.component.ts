import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  task = null;
  tasks = [];

  remainsMap = {
    '=0': 'Aucune tache en cours',
    '=1': 'Il reste 1 tache à terminer',
    other: 'Encore # taches à terminer'
  };

  constructor() { }

  ngOnInit() {
  }

  public add(): void {
    if ( this.task !== null && this.task.trim() !== '') {
      this.tasks.push(this.task);
      this.task = null;
    }
  }

  public remove(index): void {
    this.tasks.splice(index, 1);
  }

}
