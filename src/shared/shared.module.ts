import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputComponent } from './components/input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [ReactiveFormsModule, FormsModule],
  exports: [InputComponent],
})
export class SharedModule {}
