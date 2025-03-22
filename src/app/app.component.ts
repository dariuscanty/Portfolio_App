import { Component } from '@angular/core';
import { NavigationHeaderComponent } from './components/navigation-header/navigation-header.component';
import { ExperiencePageComponent } from './components/experience-page/experience-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { SkillsPageComponent } from './components/skills-page/skills-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

@Component({
  selector: 'app-root',
  imports: [NavigationHeaderComponent, AboutPageComponent, ExperiencePageComponent, SkillsPageComponent, ContactPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio_App';
}
