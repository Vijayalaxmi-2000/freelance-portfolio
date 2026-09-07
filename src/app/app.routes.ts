import { Routes } from '@angular/router';
import { About } from './features/about/about';
import { Home } from './features/home/home';
import { Services } from './features/services/services';
import { Projects } from './features/projects/projects';
import { Contact } from './features/contact/contact';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'services', component: Services },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: 'home' },
];
