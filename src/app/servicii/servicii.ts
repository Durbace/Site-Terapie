import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NavbarComponent } from '../navbar/navbar';
import { FooterComponent } from '../footer/footer';
import {RevealOnScrollDirective} from "../../reveal-on-scroll.directive";

@Component({
  selector: 'app-servicii',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, RevealOnScrollDirective],
  templateUrl: './servicii.html',
  styleUrl: './servicii.css',
})
export class ServiciiComponent {}
