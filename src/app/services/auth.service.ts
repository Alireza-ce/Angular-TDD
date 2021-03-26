import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private angAuth: AngularFireAuth, private router: Router) {
    this.user$ = this.angAuth.authState;
  }

  logout() {
    this.angAuth.auth.signOut();
    this.router.navigate(['/']);
  }
}
