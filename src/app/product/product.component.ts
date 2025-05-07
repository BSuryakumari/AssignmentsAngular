import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products = [
    { id: 1, name: 'Phone',  price: 29999 },
    { id: 2, name: 'Laptop',  price: 75999},
    { id: 3, name: 'Watch',  price: 4999 }
  ];

  constructor(private router: Router) {}

  viewDetails(id: number) {
    this.router.navigate(['/product', id]);
  }
}
