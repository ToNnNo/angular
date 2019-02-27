import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  date = new Date();

  object = { nom: 'Doe', prenom: 'John', profession: 'Agent Secret' };

  user = null;

  liste = ['Asmae', 'Karine', 'Corentin', 'Thais', 'Maxime', 'Jason',
    'Julien', 'Said le magnifique', 'Adrien', 'Vincent'];

  constructor() { }

  ngOnInit() {
  }

}
