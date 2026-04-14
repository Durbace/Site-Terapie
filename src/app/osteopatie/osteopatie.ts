import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar';

@Component({
  selector: 'app-osteopatie',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './osteopatie.html',
  styleUrl: './osteopatie.css',
})
export class OsteopatieComponent {}