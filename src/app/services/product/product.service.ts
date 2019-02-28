import { Injectable } from '@angular/core';
import {Product} from '../../classes/product';
import {isNullOrUndefined} from 'util';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // CRUD => Create Read Update Delete

  static KEY = 'products';

  products: Array<Product> = [];

  constructor() { }

  public findAll(): Array<Product> {
    const data = localStorage.getItem(ProductService.KEY);
    this.products = [];

    if ( !isNullOrUndefined(data) ) {
      for (const item of JSON.parse(data)) {
        this.products.push( new Product(item._name, item._price) );
      }
    }

    return this.products;
  }

  public add(product: Product): void {
    this.products.push(product);
    this.save();
  }

  public edit(index: number, product: Product): void {
    this.products.splice(index, 1, product);
    this.save();
  }

  public delete(index: number): void {
    this.products.splice(index, 1);
    this.save();
  }

  private save(): void {
    localStorage.setItem(ProductService.KEY, JSON.stringify(this.products));
  }
}
