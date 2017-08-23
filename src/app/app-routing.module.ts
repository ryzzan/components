import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**Components */
import { AuthGuard } from './shared/guards/auth.guard';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
}, {
  path: 'login', 
  component: LoginComponent
}, {
  path: 'forgot-password',
  component: ForgotPasswordComponent
}, {
  path: 'main',
  loadChildren: './modules/main/main.module#MainModule',
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
