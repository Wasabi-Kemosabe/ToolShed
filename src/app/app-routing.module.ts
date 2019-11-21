import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MessagesComponent } from './messages/messages.component';


const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'messages', component: MessagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
