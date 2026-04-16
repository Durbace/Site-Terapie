import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FloatingWhatsappComponent } from './floating-whatsapp/floating-whatsapp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FloatingWhatsappComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Site-Terapie');
}
