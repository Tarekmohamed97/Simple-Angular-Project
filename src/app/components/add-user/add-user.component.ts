import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AppService} from "../../app.service.";
import {User} from "../../data/User.model";
import {Router} from "@angular/router";
import {SnackBarService} from "../../common/snack-bar.service";


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  loading = false;

  constructor(private appService: AppService,
              private router: Router,
              private snackBarService: SnackBarService) { }

  ngOnInit(): void {
    if(!localStorage.getItem('token')){
      this.router.navigate(["/"]);
    }
  }

   hasNumbers(input: string) {
    let regex = /\d/g;
    return regex.test(input);
  }

  submitAddUser(addUserForm: NgForm){
    this.loading = true;
    let userObj = addUserForm.value as User;

    if (addUserForm.value.email == '' || addUserForm.value.phone == ''
      || addUserForm.value.name == '') {
      this.snackBarService.snackError('Please fill all the data');
      this.loading = false;
      return;
    }

    if( this.hasNumbers(addUserForm.value.name)){
      this.snackBarService.snackError("The name can't contain any numbers");
      this.loading = false;
      return;
    }

    if(addUserForm.value.name.length < 20){
      this.snackBarService.snackError('The name length must be 20 or longer');
      this.loading = false;
      return;
    }

    if(addUserForm.value.phone.length < 15){
      this.snackBarService.snackError('The phone is short, please enter a valid phone number');
      this.loading = false;
      return;
    }


    this.appService.addUser(userObj)
      .subscribe(response => {
        this.router.navigate(['/user-data']);
      }, error => {
        this.snackBarService.snackError("something went wrong.");
      })
  }

}
