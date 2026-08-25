import { Injectable } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly themeKey = 'theme';

  setTheme(theme: Theme): void {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem(this.themeKey, theme);
  }

  getTheme(): Theme {
    return (
      (localStorage.getItem(this.themeKey) as Theme) || 'light'
    );
  }

  toggleTheme(): void {
    const currentTheme = this.getTheme();

    const newTheme: Theme =
      currentTheme === 'light' ? 'dark' : 'light';

    this.setTheme(newTheme);
  }

  initializeTheme(): void {
    this.setTheme(this.getTheme());
  }
}