import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService, Theme } from '../../core/services/theme.service';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  menuOpen = false;
  theme: Theme = 'light';

  constructor(private themeService: ThemeService) {
    this.theme = this.themeService.getTheme();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.theme = this.themeService.getTheme();
  }
}
