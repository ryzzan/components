import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Components
 */
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './main.component';

/**
 * Modules
 */
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { ListComponent } from './components/list/list.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  declarations: [
    FormComponent, 
    HomeComponent,
    ListComponent,
    MainComponent
  ]
})
export class MainModule { }
