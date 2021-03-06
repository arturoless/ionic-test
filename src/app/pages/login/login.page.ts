import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string;
  password: string;
  constructor(private auth:AuthService) { }

  ngOnInit() {
  }
  login(email:string,password:string){
    this.auth.loginUser(this.email,this.password);
  }
}
