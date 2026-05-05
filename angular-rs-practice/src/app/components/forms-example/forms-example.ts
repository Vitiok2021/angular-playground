import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IsIntegerValidator } from '../../validators/is-integer';

@Component({
  selector: 'app-forms-example',
  imports: [FormsModule, IsIntegerValidator],
  templateUrl: './forms-example.html',
  styleUrl: './forms-example.scss',
})
export class FormsExample {
  user = {
    name: '',
    age: null as number | null,
    phones: [this.createPhone()],
  };

  get phones() {
    return this.user.phones;
  }
  createPhone() {
    return {
      type: '',
      number: '',
    };
  }
  addPhone() {
    this.phones.push(this.createPhone());
  }
}
