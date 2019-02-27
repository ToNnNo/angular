import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <header>
      <h2 class="text-center">404 - Not Found</h2>
    </header>
    <p class="lead text-warning text-center">Il semble que la page que vous recherchiez n'existe pas</p>
    <p class="lead text-center">Revenir à l'<a routerLink="/home">accueil</a></p>
  `,
  styles: []
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
