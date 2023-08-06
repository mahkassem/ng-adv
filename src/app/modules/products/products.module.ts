import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';

// Angular Material
import { AngularMatModule } from 'src/app/shared/ui/angular-mat/angular-mat.module';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductAddComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    AngularMatModule,
  ],
  providers: [ProductService]
})
export class ProductsModule { }
