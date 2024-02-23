import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list.component';
import { FeaturedArticlesComponent } from '../featured-articles/featured-articles.component';






@NgModule({
  declarations: [
    ArticleListComponent, 
    FeaturedArticlesComponent
  ],

  imports: [
    CommonModule,
  ]
})
export class ArticleListModule { }
