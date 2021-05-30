import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profile-page', component: ProfilePageComponent},
  // { path: 'profile', pathMatch: 'full', loadChildren: () => import('../../projects/profile-data/src/lib/profile-data.module').then(m => m.ProfileDataModule)},
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
