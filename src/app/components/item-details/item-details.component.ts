import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { DefaultService, Item } from 'build/openapi';
import { mergeMap, Observable } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent {
  @HostBinding('class') cssClasses = 'flex flex-col gap-4';

  item$: Observable<Item>;

  constructor(private readonly service: DefaultService, private route: ActivatedRoute, private router: Router) {
    this.item$ = this.route.params.pipe(mergeMap((params) => this.service.getItemById(params['id'])));
  }

  delete() {
    this.service.deleteItemById(this.route.snapshot.params['id']).subscribe(() => this.router.navigate(['items']));
  }
}
