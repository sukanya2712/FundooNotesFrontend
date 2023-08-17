import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginPage! : FormGroup;
  constructor(private userservice:UserService,private formBuilder:FormBuilder) { 
    this.ngOnInit()
  }

  ngOnInit(): void {
    this.loginPage=this.formBuilder.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

 

  loginSubmit(){
    console.log(this.loginPage);
    let data={
      email:this.loginPage.value.email,
      password:this.loginPage.value.password
    }
    this.userservice.Login(data).subscribe((res:any)=>{
      console.log(res.message);
      localStorage.setItem('token',res.data);
    
    });
  }
}
