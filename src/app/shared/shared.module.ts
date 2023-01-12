import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { AutofocusDirective } from './directives/autofocus.directive';

const MODULES = [
  CommonModule,
  ReactiveFormsModule,
];

const COMPONENTS = [
  ButtonComponent,
  CardComponent,
]

const DIRECTIVES = [
  AutofocusDirective
]

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS, ...DIRECTIVES]
})
export class SharedModule { }
