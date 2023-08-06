import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: Product[] = [];
  displayedColumns: string[] = ['id', 'image', 'title', 'price', 'category'];
  loading = false;

  constructor(private _productService: ProductService) {
    this.getProducts();
  }

  getProducts(): void {
    this.loading = true;
    this._productService.getProducts()
      .subscribe({
        next: (products) => {
          this.products = products;
        },
        error: (err) => {
          this.loading = false;
          alert('Some error occurred. Please try again later.')
        },
        complete: () => {
          this.loading = false;
        }
      });
  }
}
