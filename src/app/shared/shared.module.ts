import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


/**Components */
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

/**Services */
import { AuthGuard } from './guards/auth.guard'; //Guard
import { AuthenticationService } from './services/firebase/authentication.service';
import { CrudService } from './services/firebase/crud.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    LogoutComponent,
    MaterialModule
  ],
  declarations: [
    LoginComponent,
    LogoutComponent
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    CrudService
  ]
})
export class SharedModule { }
