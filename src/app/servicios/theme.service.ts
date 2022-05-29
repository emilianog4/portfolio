import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { IthemeProperties } from 'src/itheme.interface';
import { THEMES } from 'src/theme-config';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private document: Document) { 
  }
  
  getTheme(): string {
    return localStorage.getItem('themeSelect') || 'default';
  }

  setTheme(name: string): void {
    localStorage.setItem('themeSelect', name);
    const theme: IthemeProperties = (THEMES as any)[name];
    Object.keys(theme).forEach((key:string) =>{
      this.document.documentElement.style.setProperty(`--${key}`, (theme as any)[key]);
    })
  }
}
