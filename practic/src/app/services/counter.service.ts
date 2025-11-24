import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  // Мета: лічильник спільний для декількох компонентів

  private counterObs$ = new BehaviorSubject<number>(0);

  increment() {
    const current = this.counterObs$.value;
    this.counterObs$.next(current + 1);
  }
  decrement() {
    const current = this.counterObs$.value;
    this.counterObs$.next(current - 1);
  }
  constructor() {}

  get counter$() {
    return this.counterObs$.asObservable();
  }
}
