import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/core/services/modal.service';

@Component({
  selector: 'shared-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css'],
})
export class ModalWindowComponent implements OnInit {
  @Input() id: string;
  isOpened: boolean = false;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.register(this);
  }

  open() {
    this.isOpened = true;
  }

  close() {
    this.isOpened = false;
  }
}
