import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {UsersDataComponent} from "./components/users-data/users-data.component";
import {AddUserComponent} from "./components/add-user/add-user.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'user-data', component: UsersDataComponent},
  {path: 'add', component: AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
