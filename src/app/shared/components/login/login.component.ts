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

  loginForm: FormGroup;

  constructor(
    private authentication: AuthenticationService,
    private mdsnackbar: MdSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
    })
  }

  onSubmit = () => {
    this.authentication.login(this.loginForm.value)
    .then(res => {
      let string = JSON.stringify(res);
      let json = JSON.parse(string);
      this.mdsnackbar.open(json.message, '', {
        duration: 2000
      })

      this.router.navigate(this.params.route);
    });
  }
}
