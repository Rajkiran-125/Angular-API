import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  search:any;

  p:number=1;

  constructor(private service:EmpService){
    this.getallusers();
   }

   department: string[] = [
    'HR',
    'Manager',
    'Developer',
    'Tester',
    'Team Leader'
  ]

   details = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    gender:new FormControl(''),
    department:new FormControl(''),
    contact:new FormControl(''),
    salary:new FormControl(''),
  })

  get name(){
    return this.details.controls.name;
  }

  addusers(val:any){
    this.service.saveusers(val).subscribe(res =>{
      this.details.reset();
      this.getallusers();
    });
  }

  mydata:any;
  getallusers(){
    this.service.getusers().subscribe(res =>{
      this.mydata=res;
    });
  }

  deluser(id:any){
    this.service.deleteuser(id).subscribe(data =>{
      this.getallusers();
    })
  }

  

  empid:any;
  editemp(x:any){
    this.empid = x.id
    this.details.controls.name.setValue(x.name);
    this.details.controls.email.setValue(x.email);
    this.details.controls.gender.setValue(x.gender);
    this.details.controls.department.setValue(x.department);
    this.details.controls.contact.setValue(x.contact);
    this.details.controls.salary.setValue(x.salary);
  }

  update(){
    this.service.updateemp(this.details.value,this.empid).subscribe(res =>{
      this.getallusers();
    })
  }

  login(){
    return localStorage.getItem("myemp");
  }

}