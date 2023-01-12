import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DefaultService, Item } from 'build/openapi';
import { first } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-create-item',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss'],
})
export class CreateItemComponent {
  createItemFormGroup = this.formBuilder.group(
    {name: ''}
  )

  constructor(
    private formBuilder: FormBuilder,
    private service: DefaultService,
    private router: Router,
  ) {}

  onSubmit() {
    const name = this.createItemFormGroup.value.name;
    if (name) {
      this.service
        .createItem({ name })
        .pipe(first())
        .subscribe((item: Item) => this.router.navigate(['items', item.id]));
    }
  }
}
