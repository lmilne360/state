import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FeaturedComponent } from './featured/featured.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
