import { Component, OnInit } from '@angular/core';
import {Product} from '../../classes/product';
import {ProductService} from '../../services/product/product.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  products: Array<Product> = [];

  name: FormControl;
  price: FormControl;

  form: FormGroup;

  btn: string;
  selected: boolean;
  index: number;

  constructor(private service: ProductService, private fb: FormBuilder) { }

  ngOnInit() {

    this.init();

    this.name = new FormControl(null, [Validators.required]);
    this.price = new FormControl(null, [Validators.required]);

    this.form = this.fb.group({
      name: this.name,
      price: this.price
    });

    this.products = this.service.findAll();
  }

  private init(): void {
    this.btn = 'Ajouter';
    this.selected = false;
    this.index = -1;
  }

  public resetForm(): void {
    this.form.reset();
    this.init();
  }

  public addProduct(): void {
    if (this.form.valid) {
      if ( this.selected) {
        this.service.edit(this.index, new Product(this.name.value, this.price.value));
      } else {
        this.service.add(new Product(this.name.value, this.price.value));
      }

      this.resetForm();
    }
  }

  public editProduct(index: number): void {
    this.name.setValue( this.products[index].name );
    this.price.setValue( this.products[index].price );

    this.index = index;
    this.selected = true;
    this.btn = 'Modifier';
  }

  public deleteProduct(index: number): void {
    this.service.delete(index);
  }
}
