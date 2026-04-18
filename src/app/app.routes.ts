import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { BlogComponent } from './blog/blog';
import { ServiciiComponent } from './servicii/servicii';
import { OsteopatieComponent } from './osteopatie/osteopatie';
import { ContactComponent } from './contact/contact';

export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'blog', component: BlogComponent },
  { path: 'servicii', component: ServiciiComponent },
  { path: 'despre-osteopatie', component: OsteopatieComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'blog/abordari-blande-pentru-durerile-lombare-cronice',
    loadComponent: () =>
      import('./blog-lombare-page').then(m => m.BlogLombarePageComponent),
  },
];