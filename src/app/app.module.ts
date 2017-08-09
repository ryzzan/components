import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/**Components */
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';

/**Modules */
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
