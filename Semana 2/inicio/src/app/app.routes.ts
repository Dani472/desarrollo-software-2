import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component'
import {CarComponent} from './pages/car/car.component';
import {DragonballComponent} from './pages/dragonball/dragonball.component';
import {DragonballSuperComponent} from './pages/dragonball-super/dragonball-super.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterComponent
  },
  {
    path: 'car',
    component: CarComponent
  },
  {
    path: 'dragonball',
    component: DragonballComponent
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
