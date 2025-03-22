import { Component } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { CommonModule } from '@angular/common';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { Timeline } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PrimeIcons } from "primeng/api";
import { TimelineModule } from 'primeng/timeline';


@Component({
  selector: 'experience-page',
  imports: [MatStepperModule, CommonModule, NgbToastModule, Timeline, TimelineModule, CardModule, ButtonModule, StyleClassModule],
  templateUrl: './experience-page.component.html',
  styleUrl: './experience-page.component.css'
})
export class ExperiencePageComponent {
    events = [
      {
        status: "Department of Defense Cooperative Education Program",
        date: "August 2016 - August 2019",
        icon: PrimeIcons.BUILDING,
        color: "#9C27B0",
        image: "department-of-defense-logo.png",
        text: "The Depart of Defense’s Cooperative Education Program was an incredible opportunity that allowed me to apply my academic knowledge in real-world settings. This experience not only enhanced my technical skills but also gave me a unique perspective on how technology can contribute to national security and defense efforts. It was truly a privilege to collaborate with professionals in my field and contribute to impactful projects that make a difference."
      },
      {
        status: "Florida A&M University",
        date: "June 2018 - December 2020",
        icon: PrimeIcons.GRADUATION_CAP,
        color: "#673AB7",
        image: "famu-logo2.png",
        text: "Earning my Bachelor's in Computer Science from Florida A&M University was a significant milestone that reflects years of hard work, perseverance, and personal growth. During my time at FAMU, I gained a strong foundation in programming, algorithms, and problem-solving, all while being supported by a diverse and inspiring academic community. After obtaining my degree, I felt equipped me with the skills and knowledge necessary to pursue my career in technology."
      },
      {
        status: "Department of Defense",
        date: "January 2021 - Present",
        icon: PrimeIcons.BRIEFCASE,
        color: "#FF9800",
        image: "department-of-defense-logo.png",
        text: "As a Front-End Web Developer at the Department of Defense, I have the opportunity to design and build user-friendly, secure, and efficient web applications that support critical defense operations. My role allows me to work with cutting-edge technologies to create intuitive interfaces while ensuring accessibility, performance, and security are prioritized."
      }
    ];
}
