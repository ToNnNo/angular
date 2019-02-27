import { Component, OnInit } from '@angular/core';
import {Product} from '../../classes/product';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  product: Product = new Product();
  // products: Product[] = [];
  products: Array<Product> = [];

  constructor() { }

  ngOnInit() {
  }

  public addProduct(form: NgForm) {
    if ( form.valid ) {
      this.products.push(this.product);
      this.product = new Product();
      form.reset();
    }
  }

}
