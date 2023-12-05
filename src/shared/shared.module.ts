import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/Input/input.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [InputComponent, ModalWindowComponent],
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  exports: [InputComponent, ModalWindowComponent],
})
export class SharedModule {}
