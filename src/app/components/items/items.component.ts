import { Component, HostBinding } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

interface NavItem {
  text: string;
  url: string;
}

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [SharedModule, RouterOutlet, RouterLink],
  templateUrl: './items.component.html',
})
export class ItemsComponent {
  @HostBinding('class') cssClasses = 'flex flex-col h-full';

  navItems: NavItem[] = [
    { text: 'Items', url: '/items' },
    { text: 'New', url: '/items/create' },
  ];
}
