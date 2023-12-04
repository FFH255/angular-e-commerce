import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ErrorInterceptorService } from 'src/core/services/errorInterceptor.service';
import { IProduct } from './data/IProduct';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ErrorInterceptorService],
})
export class AppComponent implements OnInit {
  title = 'angular-e-commerce';
  products$: Observable<IProduct[]>;
  isLoading: boolean = false;

  constructor(public productService: ProductService) {}

  ngOnInit() {
    this.isLoading = true;
    this.products$ = this.productService.getAll(5).pipe(
      tap(() => {
        this.isLoading = false;
      })
    );
  }
}
