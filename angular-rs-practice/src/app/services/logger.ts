import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Logger {
  getLocalMessage() {
    return console.log('Local message');
  }
}
