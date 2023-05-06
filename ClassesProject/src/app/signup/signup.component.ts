import { Component } from '@angular/core';
import { EmpService } from '../emp.service';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private service:EmpService, private route:Router){}

  signup = new FormGroup({
    username:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''), 
  })


  save(val:any){
    this.service.signupuser(val).subscribe(res =>{
      // alert("Register Successfully")
      this.signup.reset();
      this.route.navigate(['signin'])
    });
  }

}
