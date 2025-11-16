import { Component, OnInit } from '@angular/core';
import { ListComponent } from './components/list/list.component';
import { ItemDetailComponent } from './card-items/item-detail/item-detail.component';
import { CounterComponent } from './components/counter/counter.component';
import { CounterService } from './services/counter.service';
import { DisplayComponent } from './components/display/display.component';
import { ParrentComponent } from './components/parrent/parrent.component';
@Component({
  selector: 'app-root',
  imports: [ParrentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  fromChild($event: Event) {
    throw new Error('Method not implemented.');
  }
  title = 'practic-gpt';
  constructor() {}
}
