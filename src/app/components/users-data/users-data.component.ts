import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {AppService} from "../../app.service.";
import {Router} from "@angular/router";
import * as AOS from "aos";
import 'aos/dist/aos.css';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.css']
})
export class UsersDataComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['name', 'email', 'phone'];

  constructor(private appService: AppService,
              private router: Router){}

  ngOnInit(): void {

    AOS.init();

    if(!localStorage.getItem('token')){
      this.router.navigate(["/"]);
    }


    this.appService.getUsers()
      .subscribe(response => {
        this.dataSource = response.entity;
      }, error => {
        console.log(error);
      })
  }

}
