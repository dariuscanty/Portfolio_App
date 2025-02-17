import { Component } from '@angular/core';
import { NavigationHeaderComponent } from './components/navigation-header/navigation-header.component';

@Component({
  selector: 'app-root',
  imports: [NavigationHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio_App';
}
