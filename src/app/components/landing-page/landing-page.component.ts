import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { ViewEncapsulation } from '@angular/core';
import { NavigationHeaderService } from '../navigation-header/navigation-header.service';

@Component({
  selector: 'landing-page',
  imports: [NgbModule, MatButtonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent implements OnInit{
  
  constructor(private headerService: NavigationHeaderService, private renderer: Renderer2) {}
  
    ngOnInit(){
      this.headerService.getThemes().subscribe(({ currTheme, prevTheme }) => {
        this.renderer.removeClass(document.documentElement, prevTheme);
        this.renderer.addClass(document.documentElement, currTheme);
      });
    }
}
