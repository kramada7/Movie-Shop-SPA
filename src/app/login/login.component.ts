import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../shared/models/userLogin';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin: UserLogin = {
    email: '',
    password: ''
  };

  invalidLogin: boolean;
  returnUrl: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {

    this.authService.login(this.userLogin)
      .subscribe((response) => {

        if (response) {
          this.router.navigateByUrl(this.returnUrl);
        } else {
          this.invalidLogin = true;
        }

      },
        (err: any) => this.invalidLogin = true);

  }

}
