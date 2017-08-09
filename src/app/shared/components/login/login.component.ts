import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MdSnackBar } from '@angular/material';

/**Services */
import { AuthenticationService } from './../../services/firebase/authentication.service';

@Component({
  selector: 'bonamondo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authentication: AuthenticationService,
    private mdsnackbar: MdSnackBar
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
      let message = JSON.stringify(res);
      this.mdsnackbar.open(message, '', {
        duration: 2000
      })
    });
  }
}
