import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent implements OnInit {
  mobileMenuOpen = false;
  scrollProgress = 0;

  ngOnInit(): void {
    this.updateScrollProgress();
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  updateScrollProgress() {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    if (documentHeight <= 0) {
      this.scrollProgress = 0;
      return;
    }

    this.scrollProgress = (scrollTop / documentHeight) * 100;
  }
}