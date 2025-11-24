import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() message!: string;

  @Output() notify = new EventEmitter<string>();

  fromChild() {
    this.notify.emit('Повідомлення з дитини');
  }
}
