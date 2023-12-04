import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/Input/input.component';
import { ModalWindowComponent } from './components/ModalWindow/ModalWindow.component';
@NgModule({
  declarations: [InputComponent, ModalWindowComponent],
  imports: [ReactiveFormsModule, FormsModule],
  exports: [InputComponent, ModalWindowComponent],
})
export class SharedModule {}
