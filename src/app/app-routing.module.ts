import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ReportComponent } from './pages/report/report.component';
import { CalenderComponent } from './pages/calender/calender.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'pages/bookings',component:BookingsComponent},
  {path:'pages/search',component:SearchComponent},
  {path:'pages/home',component:HomeComponent},
  {path:'pages/analytics',component:AnalyticsComponent},
  {path:'pages/profile',component:ProfileComponent},
  {path:'pages/report',component:ReportComponent},
  {path:'pages/calender',component:CalenderComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect to home on empty path
  { path: '**', redirectTo: 'home' } 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
