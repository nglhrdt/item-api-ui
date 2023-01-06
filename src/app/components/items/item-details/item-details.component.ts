import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultService, Item } from 'build/openapi';
import { map, mergeMap, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent {
  item$: Observable<Item>;

  constructor(
    private readonly service: DefaultService,
    private route: ActivatedRoute
  ) {
    this.item$ = this.route.params.pipe(
      mergeMap((params) => this.service.getItemById(params['id']))
    );
  }
}
