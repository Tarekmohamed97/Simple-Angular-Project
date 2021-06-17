import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { UsersDataComponent } from './components/users-data/users-data.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from "@angular/material/sort";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from '@angular/material/icon';
import { AddUserComponent } from './components/add-user/add-user.component';
import {MatPaginatorModule} from "@angular/material/paginator";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersDataComponent,
    AddUserComponent
  ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        MatCardModule,
        MatFormFieldModule,
        MatGridListModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatSnackBarModule,
        MatInputModule,
        FormsModule,
        MatProgressBarModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        MatIconModule,
        MatPaginatorModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
