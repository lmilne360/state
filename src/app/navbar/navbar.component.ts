import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  open(e){
  	var button = e.target.parentElement;
  	var ul = button.parentElement.nextElementSibling;


  	ul.classList.toggle("is-active")
  	button.classList.toggle("is-active")
  }

}
