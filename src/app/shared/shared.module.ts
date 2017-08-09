import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


/**Components */
import { FormAutocompleteMultipleComponent } from './components/form-autocomplete-multiple/form-autocomplete-multiple.component';
import { LoginComponent } from './components/login/login.component';

/**Services */
import { AuthenticationService } from './services/firebase/authentication.service';
import { CrudService } from './services/firebase/crud.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    FormAutocompleteMultipleComponent,
    LoginComponent,
    MaterialModule
  ],
  declarations: [
    LoginComponent,
    FormAutocompleteMultipleComponent
  ],
  providers: [
    AuthenticationService,
    CrudService
  ]
})
export class SharedModule { }
