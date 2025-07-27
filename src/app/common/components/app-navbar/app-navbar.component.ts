import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../commonComponent/base.component';
import { CategoriesService } from '../../services/categories.service';
import { takeUntil, tap } from 'rxjs';
import { Categories } from '../../entity/categories';

@Component({
  selector: 'app-app-navbar',
  imports: [],
  templateUrl: './app-navbar.component.html',
  styleUrl: './app-navbar.component.scss'
})
export class AppNavbarComponent extends BaseComponent implements OnInit {
  public isMenuOpen = false;
  public categories : Categories[] = [];
  constructor(
    private readonly categoriesService: CategoriesService
  ) {
    super();
  }
  ngOnInit(): void {
    this.categoriesService.getCategories().pipe(
      tap((categories: Categories[]) => {
        this.categories = categories;
      }),
      takeUntil(this.destroyed$)
    ).subscribe();
  }

}
