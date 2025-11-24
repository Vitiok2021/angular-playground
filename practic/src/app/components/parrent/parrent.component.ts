import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parrent',
  imports: [ChildComponent],
  templateUrl: './parrent.component.html',
  styleUrl: './parrent.component.scss',
})
export class ParrentComponent {
  message: string = '';

  fromChild(mes: string) {
    this.message = mes;
  }
}
