import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from "./components/contact/contact.component";
import { EducationComponent } from "./components/education/education.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { TripsComponent } from "./components/trips/trips.component";


const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'education', component: EducationComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'trips', component: TripsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const comps = [
  PortfolioComponent,
  ContactComponent,
  EducationComponent,
  ProfileComponent,
  SkillsComponent,
  TripsComponent
]
