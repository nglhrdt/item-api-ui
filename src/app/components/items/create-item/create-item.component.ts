import { Component } from '@angular/core';
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
  name = '';

  constructor(
    private readonly service: DefaultService,
    private router: Router,
  ) {}

  onSubmit() {
    const name = this.name;
    if (name) {
      this.service
        .createItem({ name })
        .pipe(first())
        .subscribe((item: Item) => this.router.navigate(['items', item.id]));
    }
  }
}
