import { Component } from '@angular/core';
import { EmpService } from '../emp.service';
import { FormGroup,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  constructor(private service:EmpService, private http:HttpClient, private route:Router){}

  signin = new FormGroup({
    username:new FormControl(''),
    password:new FormControl(''), 
  })

  login(){
    this.http.get<any>("http://localhost:3000/authenticate").subscribe(res =>{
      const emp = res.find((a:any) =>{
        return a.username == this.signin.value.username && a.password == this.signin.value.password
      });
      if(emp){
        // alert("Login Successfully")
        localStorage.setItem("myemp",emp.username);
        this.route.navigate(['employee']);
      }
      else{
        alert("Invalid UserName or Password")
      }
      this.signin.reset()
    });
  }
}
