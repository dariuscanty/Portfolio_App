import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'skills-page',
  imports: [MatGridListModule, MatCardModule],
  templateUrl: './skills-page.component.html',
  styleUrl: './skills-page.component.css'
})
export class SkillsPageComponent implements OnInit {
  breakpoint: number = 2;

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 960) ? 2 : 3;
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 960) ? 2 : 32;
  }
}
