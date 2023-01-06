import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DefaultService, Item } from 'build/openapi';
import { Observable } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [SharedModule, RouterLink],
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent {
  items$: Observable<Item[]>;

  constructor(private readonly service: DefaultService) {
    this.items$ = service.getItems();
  }
}
