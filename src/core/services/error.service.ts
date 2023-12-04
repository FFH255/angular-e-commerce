import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ErrorService {
  private isErrorSubject = new BehaviorSubject<boolean>(false);
  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();
  isError$ = this.isErrorSubject.asObservable();

  setMessage(message: string) {
    this.errorMessageSubject.next(message);
    if (message !== '') {
      this.isErrorSubject.next(true);
    }
  }

  clear() {
    this.errorMessageSubject.next('');
    this.isErrorSubject.next(false);
  }
}
