import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NavbarComponent } from '../navbar/navbar';
import { FooterComponent } from '../footer/footer';
import { RevealOnScrollDirective } from '../../reveal-on-scroll.directive';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule, NavbarComponent, RouterLink, FooterComponent, RevealOnScrollDirective],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}