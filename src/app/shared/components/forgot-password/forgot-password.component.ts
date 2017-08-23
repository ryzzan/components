import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MdSnackBar } from '@angular/material';
import { Router } from '@angular/router';

/**Services */
import { AuthenticationService } from './../../services/firebase/authentication.service';

@Component({
  selector: 'bonamondo-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  @Input() params;
  
    errors: any = [];
    forgotPasswordForm: FormGroup;
    iconColorToEmail: string;
    iconColorToRepeatEmail: string;
  
    /**
     * Configurable and required
     */
    route: any;
    
    /**
     * Configurable but not required
     */
    forgotRepeatEmailRoute: any;
    mdIconToEmail: string = "email";
    mdIconToRepeatEmail: string = "mail_outline";
    placeholderToEmail: string = "E-mail";
    placeholderToRepeatEmail: string = "Repeat e-mail";
  
    /**
     * Configurable and required only with condition
     */
    
  
    constructor(
      private authentication: AuthenticationService,
      private mdsnackbar: MdSnackBar,
      private router: Router
    ) { }
  
    ngOnInit() {
      if(this.params) {
        if(this.params.forgotRepeatEmailRoute) {
          this.forgotRepeatEmailRoute = this.params.forgotRepeatEmailRoute;
        }
  
        if(this.params.mdIconToEmail) {
          this.mdIconToEmail = this.params.mdIconToEmail;
        }
  
        if(this.params.mdIconToRepeatEmail) {
          this.mdIconToRepeatEmail = this.params.mdIconToRepeatEmail;
        }
  
        if(this.params.placeholderToEmail) {
          this.placeholderToEmail = this.params.placeholderToEmail;
        }
  
        if(this.params.placeholderToRepeatEmail) {
          this.placeholderToRepeatEmail = this.params.placeholderToRepeatEmail;
        }
  
        if(!this.params.route) {
          this.errors.push({
            cod: 'bm-lo-01',
            message: "Definir rota do logout"
          });
        } else {
          this.route = this.params.route;
        }
      } else {
        this.errors.push({
          cod: 'p-01',
          message: "Definir parâmetros mínimos do componente"
        });
      }
  
      this.forgotPasswordForm = new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'repeatEmail': new FormControl(null, [Validators.required, Validators.email])
      })
    }
  
    onChangeEmail = () => {
      this.forgotPasswordForm.get('email').valid ? this.iconColorToEmail = "#000" : this.iconColorToEmail = "#f44336"
    }
    
    onChangeRepeatEmail = () => {
      if(this.forgotPasswordForm.get('repeatEmail').value != this.forgotPasswordForm.get('email').value) {
        this.forgotPasswordForm.get('repeatEmail').setErrors({'errorRepeating': true})
      }
      
      this.forgotPasswordForm.get('repeatEmail').valid ? this.iconColorToRepeatEmail = "#000" : this.iconColorToRepeatEmail = "#f44336"
    }
  
    onForgotRepeatEmail = () => {
      this.router.navigate(this.forgotRepeatEmailRoute);
    }
  
    onSubmit = () => {
      if(this.forgotPasswordForm.valid) {
        console.log("service to forgot password")
      }
    }
}
