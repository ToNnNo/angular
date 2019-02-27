import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locale',
  templateUrl: './locale.component.html',
  styleUrls: ['./locale.component.css']
})
export class LocaleComponent implements OnInit {

  lang: string;
  devise: string;

  date = new Date();

  constructor() { }

  ngOnInit() {
  }

  public changeLang(lang: string): void {
    this.lang = lang;
  }

  public changeDevise(devise: string): void {
    this.devise = devise;
  }
}
