import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar';

@Component({
  selector: 'app-servicii',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  templateUrl: './servicii.html',
  styleUrl: './servicii.css',
})
export class ServiciiComponent {}
