import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  name = 'Stéphane';

  product = { name: 'Pomme', price: 12.99 };

  html = '<strong>je suis un texte en gras</strong>';

  source = 'assets/images/chopper.jpg';

  message = null;

  liste = ['Asmae', 'Karine', 'Corentin', 'Thais', 'Maxime', 'Jason',
    'Julien', 'Said le magnifique', 'Adrien', 'Vincent'];

  constructor() { }

  ngOnInit() {
  }

  public uppercase(chaine: string): string {
    return chaine.toUpperCase();
  }

  public clicked(): void {
    alert('Bravo !');
  }

  public confirmation(e: MouseEvent): void { // e: any
    e.preventDefault();
    confirm('Etes vous sur ?');
  }

  public showMessage(): void {
    alert(this.message);
  }

}
