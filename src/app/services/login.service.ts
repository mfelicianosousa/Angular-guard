import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  doLogin(){
     localStorage.setItem('token', 'abc12345');
  }

  doLogout(){
    localStorage.clear();
  }
}
