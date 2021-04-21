import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { SportsPageComponent } from './pages/sports-page/sports-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { SportsComponent } from './components/sports/sports.component';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './components/weather/weather.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminRegisterComponent } from './components/admin-register/admin-register.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { EditNewsComponent } from './components/edit-news/edit-news.component';
import { SportsArticlePageComponent } from './pages/sports-article-page/sports-article-page.component';
import { SportsArticleComponent } from './components/sports-article/sports-article.component';
import { UnknownAdminHeaderComponent } from './components/unknown-admin-header/unknown-admin-header.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { ListNewsComponent } from './components/list-news/list-news.component';
import { ListNewsPageComponent } from './pages/list-news-page/list-news-page.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsDetailsComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    HomePageComponent,
    ContactUsPageComponent,
    SportsPageComponent,
    AboutUsPageComponent,
    NewsPageComponent,
    AdminPageComponent,
    SportsComponent,
    ChatComponent,
    WeatherComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    AboutUsComponent,
    EditNewsComponent,
    SportsArticlePageComponent,
    SportsArticleComponent,
    UnknownAdminHeaderComponent,
    AdminHeaderComponent,
    AddArticleComponent,
    ListNewsComponent,
    ListNewsPageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
