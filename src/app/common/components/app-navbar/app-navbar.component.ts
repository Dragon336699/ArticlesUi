import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../commonComponent/base.component';

@Component({
  selector: 'app-app-navbar',
  imports: [],
  templateUrl: './app-navbar.component.html',
  styleUrl: './app-navbar.component.scss'
})
export class AppNavbarComponent extends BaseComponent implements OnInit {
  public isMenuOpen = false;
  constructor() {
    super();
  }
  ngOnInit(): void {
  }

}
