import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FeaturedComponent } from './featured/featured.component';
import {LocalComponent} from './local/local.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  title = 'Expanding Access to Voter Registration';
  summary ="Governor Cuomo announced a series of aggressive executive actions designed to expand voter registration opportunities for NY'ers to help combat low voter participation."
}
