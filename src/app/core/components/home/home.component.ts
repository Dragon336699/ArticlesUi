import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../common/commonComponent/base.component';
import { ArticlesDto } from '../../../common/dtos/articles.dto';
import { ArticlesService } from '../../../common/services/articles.service';
import { takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent extends BaseComponent implements OnInit {
  public articles: ArticlesDto[] = [];
  constructor(
    private readonly articlesService: ArticlesService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.articlesService.getHighlightArticles().pipe(
      tap((articles: ArticlesDto[]) => {
        this.articles = articles;
      }),
      takeUntil(this.destroyed$)
    ).subscribe();
  }
}
