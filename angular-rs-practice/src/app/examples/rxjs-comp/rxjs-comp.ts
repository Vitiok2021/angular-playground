import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-comp',
  imports: [],
  templateUrl: './rxjs-comp.html',
  styleUrl: './rxjs-comp.scss',
})
export class RxjsComp {
  source = new Observable((subscriber) => {
    console.log('Observable created');
    let count = 0;

    const timer = setInterval(() => {
      if (count < 3) subscriber.next(count++);
      else subscriber.error('Damn!');
    }, 1000);

    return () => {
      console.log('Observable destroyed');
      clearInterval(timer);
    };
  });
  subscription;
  constructor() {
    this.subscription = this.source.subscribe({
      next: (val) => console.log('next:', val),
      error: (err) => console.error('error:', err),
      complete: () => console.log('completed'),
    });
  }
}
