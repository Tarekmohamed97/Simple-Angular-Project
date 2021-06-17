import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from '@angular/router';
import {AppService} from "../../app.service.";
import {SnackBarService} from "../../common/snack-bar.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;

  constructor(private appService: AppService,
              private router: Router,
              private snackBarService: SnackBarService) { }

  ngOnInit(): void {
  }

  submitLogin(loginForm: NgForm) {

    this.loading = true;

    if (loginForm.value.email == '' || loginForm.value.password == '') {
      this.snackBarService.snackError('Please fill all the data');
      this.loading = false;
      return;
    }

    this.appService
      .login(loginForm.value.email, loginForm.value.password)
      .subscribe(response => {
        if(response.responseCode == 200) {
          this.router.navigate(['/user-data']);
          localStorage.setItem('token', response.entity[0].token);
        }
      }, error => {
        this.loading = false;
        if(error.error.message == "invalid email or password"){
          this.snackBarService.snackError('Wrong username or password');
        }else{
          this.snackBarService.snackError("something went wrong.");
        }
      });
  }

}
