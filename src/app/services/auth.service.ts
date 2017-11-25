import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http/src/static_response';
import { User } from '../login/user';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }
  data: any;
  isAuthenticated: boolean = false;
  login(username: string, password: string) {

    this.http.get('http://localhost:8087/user/login?username=' + username + '&password=' + password).
      subscribe((response: Response) => {
        // Read the result field from the JSON response.
        // this.results = data['results'];
        if (!response) {
          console.log(response);
          return;
        }
        let user = <User>response.json();
        localStorage.setItem('user', JSON.stringify(user));
        this.isAuthenticated = true;
      });
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.setItem('user', null)
    console.log(localStorage.getItem('user'))
  }
}
