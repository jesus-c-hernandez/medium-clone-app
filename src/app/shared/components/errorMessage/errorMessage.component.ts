import { Component, Input } from '@angular/core';

@Component({
  selector: 'mc-error-message',
  template: '<div>{{errorMessage}}</div>',
  standalone: true,
})
export class ErrorMessageComponent {
  @Input() errorMessage: string = '';
}
