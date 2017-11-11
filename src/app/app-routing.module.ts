import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateJoinComponent } from './create-join/create-join.component'
import { NarratorComponent } from './narrator/narrator.component'

  const routes: Routes = [
  { path: 'createorjoin', component: CreateJoinComponent },
  { path: 'narrator', component: NarratorComponent }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

