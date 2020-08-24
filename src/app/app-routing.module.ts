import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicyComponent } from './policy/policy.component'
import { SupportComponent } from './support/support.component'


const routes: Routes = [
  { path: '', redirectTo: '/policy', pathMatch: 'full' },
  { path: 'policy', component: PolicyComponent },
  { path: 'support', component: SupportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
