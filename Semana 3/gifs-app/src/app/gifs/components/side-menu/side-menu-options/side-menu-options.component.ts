import { Component, inject } from '@angular/core';
import {MenuOption} from '../../../interfaces/menu-option.interface';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {GifsService} from '../../../services/gifs.service';

@Component({
  selector: 'gifs-side-menu-options',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './side-menu-options.component.html',
  styles: ``
})
export class SideMenuOptionsComponent {

  gifService = inject(GifsService);

  menuOption: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      sublabel: 'Gifs populares',
      route: '/dashboard/trending'
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Search',
      sublabel: 'Buscador de gifs',
      route: '/dashboard/search'
    }
  ];

}
