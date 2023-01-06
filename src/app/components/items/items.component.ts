import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemsListComponent } from "./items-list/items-list.component";

@Component({
    selector: 'app-items',
    standalone: true,
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.scss'],
    imports: [SharedModule, RouterOutlet, RouterLink, ItemsListComponent]
})
export class ItemsComponent {

}
