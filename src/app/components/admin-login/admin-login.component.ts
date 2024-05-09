import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent  implements  OnInit{
  email = ''
  password = ''
  token =  ''


  ngOnInit() {
    this.token = localStorage.getItem('jwt')
  }

  constructor(private adminService:AdminService, private router: Router,){}

  login(){
    this.adminService.login({email:this.email?.toLocaleLowerCase()?.trim(), password: this.password?.trim()}).subscribe((data:any)=>{
      if(data?.data?.accessToken){
        this.router.navigate(['orders'])
      }
    })
  }
}
