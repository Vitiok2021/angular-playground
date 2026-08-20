import { Component, inject } from '@angular/core';
import { Logger } from '../../services/logger';

@Component({
  selector: 'app-local-component',
  imports: [],
  templateUrl: './local-component.html',
  styleUrl: './local-component.scss',
})
export class LocalComponent {
  localMessageService = inject(Logger);
  constructor() {
    console.log(this.localMessageService.getLocalMessage());
  }
}
