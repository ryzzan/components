import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


/**Components */
import { DataTableComponent } from './components/data-table/data-table.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { FormAutocompleteMultipleComponent } from './components/form-autocomplete-multiple/form-autocomplete-multiple.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MenuSidenavComponent } from './components/menu-sidenav/menu-sidenav.component';
import { MenuToolbarComponent } from './components/menu-toolbar/menu-toolbar.component';

/**
 * Pipes
 */

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
  declarations: [
    DataTableComponent,
    ForgotPasswordComponent,
    FormAutocompleteMultipleComponent,
    LoginComponent,
    LogoutComponent,
    MenuSidenavComponent,
    MenuToolbarComponent
  ],exports: [
    DataTableComponent,
    ForgotPasswordComponent,
    FormAutocompleteMultipleComponent,
    LoginComponent,
    LogoutComponent,
    MenuSidenavComponent,
    MenuToolbarComponent,
    MaterialModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    CrudService
  ]
})
export class SharedModule { }
