import { Component, OnInit, ViewChild, Renderer2, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavigationHeaderService } from './navigation-header.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatMenuTrigger } from '@angular/material/menu';
import { HostListener } from '@angular/core';

@Component({
  selector: 'navigation-header',
  imports: [MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatSlideToggleModule, MatMenuModule],
  templateUrl: './navigation-header.component.html',
  styleUrl: './navigation-header.component.css'
})
export class NavigationHeaderComponent implements OnInit {
  @Output() sectionChange = new EventEmitter<string>();

  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.menuTrigger.closeMenu();
  }
  
  icon: string = 'dark_mode';

  constructor(private headerService: NavigationHeaderService, private renderer: Renderer2) {}

  ngOnInit(){
    this.headerService.getThemes().subscribe(({ icon, currTheme, prevTheme }) => {
      this.icon = icon;
      this.renderer.removeClass(document.documentElement, prevTheme);
      this.renderer.addClass(document.documentElement, currTheme);
    });
  }

  toggleTheme() {
    this.headerService.switchThemes();
  }

  navigateToSection(sectionId: string) {
    this.sectionChange.emit(sectionId);
  }

  downloadResume() {
    this.headerService.getResume().subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Darius_Canty_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
  }
}
