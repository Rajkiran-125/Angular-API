import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClassesProject';

  x:any = localStorage.getItem("myemp");

  login(){
    return localStorage.getItem("myemp");
  }

  logout(){
    return localStorage.removeItem("myemp");
  }

  loginafter(){
    
  }

}
 