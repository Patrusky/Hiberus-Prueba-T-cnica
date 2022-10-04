import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

import { SingInComponent } from './components/sing-in/sing-in.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component: AppComponent, pathMatch: 'full'},
  {path: 'singIn', component: SingInComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UsersComponent},
  {path: '**',component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
