import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { BlogComponent } from './blog/blog';
import { ServiciiComponent } from './servicii/servicii';
import { OsteopatieComponent } from './osteopatie/osteopatie';

export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'blog', component: BlogComponent },
  { path: 'servicii', component: ServiciiComponent },
  { path: 'despre-osteopatie', component: OsteopatieComponent },
];