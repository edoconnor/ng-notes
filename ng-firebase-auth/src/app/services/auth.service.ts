import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    userLoggedIn: boolean;    

    constructor(private router: Router, private afAuth: AngularFireAuth) {
        this.userLoggedIn = false;

        this.afAuth.onAuthStateChanged((user) => {             
            if (user) {
                this.userLoggedIn = true;
            } else {
                this.userLoggedIn = false;
            }
        });
    }

    loginUser(email: string, password: string): Promise<any> {
      return this.afAuth.signInWithEmailAndPassword(email, password)
          .then(() => {
              console.log('Auth Service: loginUser: success');
              // this.router.navigate(['/dashboard']);
          })
          .catch(error => {
              console.log('Auth Service: login error...');
              console.log('error code', error.code);
              console.log('error', error);
              if (error.code) {
                  return { isValid: false, message: error.message };
              }
              return { isValid: false, message: 'An unknown error occurred.' };
          });
  }

  signupUser(user: any): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
        .then((result) => {
            let emailLower = user.email.toLowerCase();
            if (result.user) {
                result.user.sendEmailVerification();
            }
        })
        .catch(error => {
            console.log('Auth Service: signup error', error);
            if (error.code) {
                return { isValid: false, message: error.message };
            }
            return { isValid: false, message: 'An unknown error occurred.' };
        });
}
}