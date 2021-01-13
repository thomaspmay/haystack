import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ListingComponent } from './components/listings/listing.component';
import { ListingReviewComponent } from './components/listing-review/listing-review.component';
import { CreateListingComponent } from './components/create-listing/create-listing.component';
import { CreateReviewComponent } from './components/create-review/create-review.component';
import { ErrorComponent } from './components/error/error.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component'
import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
import { OverviewComponent } from './admin/components/overview/overview.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin', component: OverviewComponent, canActivate: [ AuthGuard ]},
  {path: 'profile',component: ProfileComponent},
  {path: 'about', component: AboutComponent},
  {path: 'search', component: SearchComponent},
  {path: 'create-listing', component: CreateListingComponent},
  {path: 'listings', component: ListingComponent},
  {path: 'create-review', component: CreateReviewComponent},
  {path: 'listing-review', component: ListingReviewComponent},
  {path: '**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
