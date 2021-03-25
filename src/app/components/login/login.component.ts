import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private angFire: AngularFireAuth,
    private db: AngularFireDatabase
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getProductList();
  }

  getProductList() {
    this.db
      .list('/products')
      .valueChanges()
      .subscribe((data) => {
        console.log(data);
      });
  }

  initForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  submit() {
    if (this.loginForm.invalid) {
      return;
    }
  }

  googleLogin() {
    this.angFire.auth.signInWithRedirect(
      new firebase.auth.GoogleAuthProvider()
    );
  }
}
