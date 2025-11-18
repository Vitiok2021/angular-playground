import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CounterComponent } from './counters-folder/counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'product-viewer';

  parentValue = 0;

  onCounterChanged(newVal: number) {
    this.parentValue = newVal;
  }
}
