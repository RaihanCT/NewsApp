import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { SportsArticlePageComponent } from './pages/sports-article-page/sports-article-page.component';
import { SportsPageComponent } from './pages/sports-page/sports-page.component';
import {NotFoundComponent} from './pages/not-found/not-found.component'


const routes: Routes = [
  { path: "", component: HomePageComponent},
  { path: "home", component: HomePageComponent},
  { path: "sports", component: SportsPageComponent},
  { path: "sports-article/:id", component: SportsArticlePageComponent},
  { path: "contact-us", component: ContactUsPageComponent},
  { path: "about-us", component: AboutUsPageComponent},
  { path: "admin-login", component: AdminPageComponent},
  { path: "admin-create-news", component: NewsPageComponent, canActivate: [AuthGuard]},
  { path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
