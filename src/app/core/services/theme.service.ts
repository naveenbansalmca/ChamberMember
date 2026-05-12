import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  themes = [
    'light-theme',
    'dark-theme',
    'blue-theme',
    'green-theme'
  ];

  setTheme(theme: string) {

    document.body.classList.remove(...this.themes);

    document.body.classList.add(theme);

    localStorage.setItem('theme', theme);
  }

  loadTheme() {

    const savedTheme =
      localStorage.getItem('theme')
      || 'light-theme';

    this.setTheme(savedTheme);
  }
}