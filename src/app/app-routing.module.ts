import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MessagesComponent } from './messages/messages.component';
import { InputUserDataFormComponent } from './input-user-data-form/input-user-data-form.component';
import { DisplayUserDataComponent } from './display-user-data/display-user-data.component';
import { GoogleMapSearchComponent } from './google-map-search/google-map-search.component';


const routes: Routes = [
  { path: '', component: InputUserDataFormComponent },
  { path: 'user/:uid', component: DisplayUserDataComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'search', component: GoogleMapSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
