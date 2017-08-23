import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MdSnackBar } from '@angular/material';
import { Router } from '@angular/router';

/**Services */
import { AuthenticationService } from './../../services/firebase/authentication.service';

@Component({
  selector: 'bonamondo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @Input() params;

  errors: any = [];
  loginForm: FormGroup;
  iconColorToEmail: string;
  iconColorToPassword: string;

  /**
   * Configurable and required
   */
  route: any;
  
  /**
   * Configurable but not required
   */
  forgotPasswordRoute: any;
  mdIconToEmail: string = "email";
  mdIconToPassword: string = "lock";
  placeholderToEmail: string = "E-mail";
  placeholderToPassword: string = "Password";

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
      if(this.params.forgotPasswordRoute) {
        this.forgotPasswordRoute = this.params.forgotPasswordRoute;
      }

      if(this.params.mdIconToEmail) {
        this.mdIconToEmail = this.params.mdIconToEmail;
      }

      if(this.params.mdIconToPassword) {
        this.mdIconToPassword = this.params.mdIconToPassword;
      }

      if(this.params.placeholderToEmail) {
        this.placeholderToEmail = this.params.placeholderToEmail;
      }

      if(this.params.placeholderToPassword) {
        this.placeholderToPassword = this.params.placeholderToPassword;
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

    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
    })
  }

  onChangeEmail = () => {
    this.loginForm.get('email').valid ? this.iconColorToEmail = "#000" : this.iconColorToEmail = "#f44336"
  }

  onChangePassword = () => {
    this.loginForm.get('password').valid ? this.iconColorToPassword = "#000" : this.iconColorToPassword = "#f44336"
  }

  onForgotPassword = () => {
    this.router.navigate(this.forgotPasswordRoute);
  }

  onSubmit = () => {
    if(this.loginForm.valid) {
      this.authentication.login(this.loginForm.value)
      .then(res => {
        let string = JSON.stringify(res);
        let json = JSON.parse(string);
        this.mdsnackbar.open(json.message, '', {
          duration: 2000
        })

        this.router.navigate(this.route);
      });
    }
  }
}
