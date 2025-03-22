import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-about-page',
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.css'],
    standalone: true,
    imports: [MatButtonModule]
})
export class AboutPageComponent {
    // Component logic here
}