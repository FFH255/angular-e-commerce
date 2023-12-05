import { Injectable } from '@angular/core';
import { ModalWindowComponent } from 'src/shared/components/modal-window/modal-window.component';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private modals: ModalWindowComponent[] = [];

  register(modal: ModalWindowComponent) {
    const isExists = this.modals.find((m) => m.id === modal.id);
    if (isExists) {
      return;
    }
    this.modals.push(modal);
  }

  unregister(modal: ModalWindowComponent) {
    this.modals.filter((m) => m !== modal);
  }

  open(id: string) {
    const modal = this.modals.find((m) => m.id === id);
    if (!modal) {
      console.log('[ModalService]: no modal window with id', id, this.modals);
      return;
    }
    modal.open();
  }

  close(id: string) {
    const modal = this.modals.find((m) => m.id === id);
    modal?.close();
  }
}
