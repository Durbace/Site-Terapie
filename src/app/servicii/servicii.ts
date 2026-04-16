import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NavbarComponent } from '../navbar/navbar';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-servicii',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './servicii.html',
  styleUrl: './servicii.css',
})
export class ServiciiComponent {}
