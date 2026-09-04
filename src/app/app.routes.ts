import { Routes } from '@angular/router';
import { About } from './features/about/about';
import { Home } from './features/home/home';
import { Services } from './features/services/services';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'services', component: Services },
  { path: '**', redirectTo: 'home' },
];
