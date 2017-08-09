import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**Components */
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
}, {
  path: 'login', 
  component: LoginComponent
}, {
  path: 'form', 
  component: FormComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
