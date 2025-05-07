import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  products = [
    { id: 1, name: 'Phone', description: 'Smartphone with 8GB RAM', price: 29999,  image: 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1741157751159/3c4dd54fd2b122f2769b8877599f9886.png'  },
    { id: 2, name: 'Laptop', description: 'Gaming laptop with RTX 3060', price: 75999,  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQywp__DC06vpfzlrvPtunAOIb4JixAzmqNQ&s' },
    { id: 3, name: 'Watch', description: 'Smartwatch with heart rate monitor', price: 4999, image: 'https://cdn.baltic-watches.com/f/73554/2561x3414/38be1cddcc/aquascaphe-dual-crown-collection.jpg?width=3840' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === id);
  }
}
