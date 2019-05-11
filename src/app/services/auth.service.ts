import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private router: Router) { }
  loginUser(email:string,password:string){
    this.auth.auth.signInWithEmailAndPassword(email,password).then(user=>{
      this.router.navigate(['/home']);
    }).catch(err => console.log(err));
  }
  logOut(){
    this.auth.auth.signOut().then(()=>{
      console.log("thank u next");
      this.router.navigate(['/']);
    }).catch(err=> console.log(err));
  }
}
