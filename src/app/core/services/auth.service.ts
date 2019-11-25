import { Injectable } from '@angular/core';
import { UserLogin } from 'src/app/shared/models/userLogin';
import { Observable } from 'rxjs';
import { JwtService } from './jwt.service';
import { ApiService } from './api.service';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService, private jwtService: JwtService) { }

  login(userLogin: UserLogin): Observable<boolean> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    return this.apiService.create('/user/login', userLogin, options)
      .pipe(map(response => {
        if (response) {
          this.jwtService.saveToken(response.token);
          return true;
        }
        return false;
      }));
  }

  logout() {
    this.jwtService.destroyToken();
  }
}
