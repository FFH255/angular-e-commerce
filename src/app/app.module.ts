import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';
import { ErrorInterceptorService } from 'src/core/services/errorInterceptor.service';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { ErrorService } from 'src/core/services/error.service';
import { CreateProductFormComponent } from './components/create-product-form/create-product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/shared/shared.module';
import { ModalService } from 'src/core/services/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductComponent,
    GlobalErrorComponent,
    CreateProductFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    ErrorService,
    ModalService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
