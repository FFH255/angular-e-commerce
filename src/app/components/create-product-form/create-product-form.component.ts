import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.css'],
})
export class CreateProductFormComponent {
  productForm = new FormGroup({
    title: new FormControl('', { nonNullable: true }),
    description: new FormControl('', { nonNullable: true }),
    price: new FormControl('0', { nonNullable: true }),
    category: new FormControl('', { nonNullable: true }),
    image: new FormControl('', { nonNullable: true }),
  });

  constructor() {}

  onSubmit() {
    console.log(this.productForm.value);
  }
}
