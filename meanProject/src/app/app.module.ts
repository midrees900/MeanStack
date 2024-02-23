import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StaticpagesModule } from './staticpages/staticpages.module';
import { LatestArticlesComponent } from './articles/latest-articles/latest-articles.component'; 
import { ArticlesModule } from './articles/articles.module';
import { ArticleDetailsComponent } from './articles/article-details/article-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    LatestArticlesComponent,
    PagenotfoundComponent,
    ArticleDetailsComponent
  
  ],
  imports: [
    BrowserModule,
    ArticlesModule,
    StaticpagesModule,
    AppRoutingModule
  
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
