import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NavbarComponent } from '../navbar/navbar';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-osteopatie',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './osteopatie.html',
  styleUrl: './osteopatie.css',
})
export class OsteopatieComponent {}