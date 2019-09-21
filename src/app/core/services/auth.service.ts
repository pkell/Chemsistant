import { Injectable, NgZone } from "@angular/core";
import {Observable} from 'rxjs';   
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class AuthService {
    userData: any;
  constructor(
   public afAuth: AngularFireAuth,
   public afs: AngularFirestore,
   private router: Router,
 )
 {
  this.afAuth.authState.subscribe(user => {
    if (user) {
      this.userData = user;
      localStorage.setItem('user', JSON.stringify(this.userData));
    } else {
      localStorage.setItem('user', null);
    }
  });
}

    get isLoggedIn(): boolean {
      const user = JSON.parse(localStorage.getItem('user'));
      return (user !== null) ? true : false;
    }

    get currentUserId(): string {
      const user = JSON.parse(localStorage.getItem('user'));
      return user.uid;
    }

      
  doLogin(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(res => {
        this.router.navigate(['compounds']);
      }, err => reject(err))
    })
  }

  doLogout(){
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }
}