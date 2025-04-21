import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('experienceSection') experienceSection!: ElementRef;
  @ViewChild('skillsSection') skillsSection!: ElementRef;
  @ViewChild('contactSection') contactSection!: ElementRef;

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    const headerOffset = 60; // Adjust this value based on your header height

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
