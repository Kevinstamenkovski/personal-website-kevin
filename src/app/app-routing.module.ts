import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ContactComponent} from "./components/contact/contact.component";
import {EducationComponent} from "./components/education/education.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {SkillsComponent} from "./components/skills/skills.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'education', component: EducationComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'skills', component: SkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const comps = [ HomeComponent, ContactComponent, EducationComponent, ProfileComponent, SkillsComponent ]
