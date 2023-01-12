import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `<ng-content></ng-content>`,
})
export class CardComponent {
  @HostBinding('class') cssClasses = 'p-4 flex overflow-hidden bg-white dark:bg-slate-600 rounded border border-slate-300 dark:border-slate-700';
}
