import { Component } from '@angular/core';
import { ThemeService } from './servicios/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  theme = "default";
  mode = false;

  constructor(private themeService: ThemeService){
    this.changeTheme(this.themeService.getTheme());
  }

  changeTheme(theme: string): void {
    console.log('THEME:', theme);
    this.themeService.setTheme(theme);
  }

  toggleTheme(): string {
    this.mode=!this.mode;
    if(this.mode === true){
      return this.theme = 'default';
    }else{
    return this.theme = 'dark';
    }
  }
}
