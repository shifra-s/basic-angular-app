import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router ) { }

  ngOnInit() {
  }

  login(emailHtmlElement, passwordHtmlElement) {

    //subscribe gets 3 functions- were just doing two- success & error
    this.authService
    .login(emailHtmlElement.value, passwordHtmlElement.value)
    .subscribe((successRes) => {
      console.log(successRes);
      //navigate to "member"
      this.router.navigate(["member"]);
    }, (errorRes) => {
      console.log(errorRes);

      //if there's an error, clear the email & pwd inputs
      emailHtmlElement.value = '';
      passwordHtmlElement.value = ''
    });


  }
}