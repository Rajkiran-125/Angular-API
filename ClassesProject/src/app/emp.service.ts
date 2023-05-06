import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:3000/emp"

  saveusers(data:any){
    return this.http.post(this.url,data);
  }

  getusers(){
    return this.http.get(this.url); 
  }

  deleteuser(id:any){
    return this.http.delete("http://localhost:3000/emp/"+id)
  }

  updateemp(data:any,id:any){
    return this.http.put("http://localhost:3000/emp/"+id,data)
  }

  url2 ="http://localhost:3000/authenticate"

  signupuser(data:any){
    return this.http.post(this.url2,data);
  }
}
