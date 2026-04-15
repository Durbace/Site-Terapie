import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {}