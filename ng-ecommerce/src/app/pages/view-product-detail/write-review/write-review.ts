import { Component } from '@angular/core';
import { ViewPanel } from '../../../directives/view-panel';

@Component({
  selector: 'app-write-review',
  imports: [ViewPanel],
  template: `
    <div appViewPanel>
      <h2 class="text-xl font-semibold mb-6">Write a Review</h2>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class WriteReview {}
