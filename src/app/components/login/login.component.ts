import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private service: LoginService
  ) { }

  login(){
    this.service.doLogin();
  }
  logout(){
    this.service.doLogout();
  }
}
