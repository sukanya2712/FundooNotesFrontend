import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpsService } from '../https/https.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 base = environment.baseUrl
  constructor(private https: HttpsService) { }
  Login(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log("hello");
    return this.https.PostService(this.base+`User/Login`,data, false,header)
  }
  Register(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log("hello");
    return this.https.PostService(this.base+`User/Register`,data, false,header)
  }

}
