import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [RouterLink],
  template: `
    <nav style="padding: 10px; background: #eee;">
      <a routerLink="/">Home</a>
    </nav>
  `
})
export class NavbarComponent {}
