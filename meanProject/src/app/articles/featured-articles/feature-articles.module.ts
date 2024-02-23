import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedArticlesComponent } from './featured-articles.component';




@NgModule({
  declarations: [ 
    FeaturedArticlesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FeaturedArticlesComponent 
  
  ]
})
export class FeatureArticlesModule { }
