import { Injectable } from '@angular/core';

import { fbAuth } from './../../../../environments/firebase-auth-config';

@Injectable()
export class AuthenticationService {

  constructor() { }

  login = (params) => new Promise((resolve, reject) => {

    fbAuth.signInWithEmailAndPassword(params.email, params.password)
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error['code'];
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        resolve('Wrong password.');
      } else {
        resolve(errorMessage);
      }
      resolve(error);
    })
    .then(res => {
      console.log(res.refreshToken);
    });
  })
}
