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
      if(res.refreshToken) {
        resolve({
          cod: "l-01",
          message: "Login feito com sucesso."
        })
      }
    })
    .catch(rej => {
      reject({
        cod: "l-02",
        message: rej
      })
    });
  })

  logout = () => new Promise((resolve, reject) => {
    fbAuth.signOut()
    .then(res => {
      resolve({
        cod: "lo-01",
        message: res
      })
    })
    .catch(rej => {
      reject({
        cod: "lo-02",
        message: rej
      })
    })
  })
}
