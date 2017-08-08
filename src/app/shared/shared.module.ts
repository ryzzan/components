import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


/**Components */
import { LoginComponent } from './components/login/login.component';

/**Services */
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    MaterialModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthenticationService
  ]
})
export class SharedModule { }
