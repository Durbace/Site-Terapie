import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NavbarComponent } from '../navbar/navbar';
import { FooterComponent } from '../footer/footer';
import { RevealOnScrollDirective } from '../../reveal-on-scroll.directive';

@Component({
  selector: 'app-osteopatie',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, RevealOnScrollDirective],
  templateUrl: './osteopatie.html',
  styleUrl: './osteopatie.css',
})
export class OsteopatieComponent {}