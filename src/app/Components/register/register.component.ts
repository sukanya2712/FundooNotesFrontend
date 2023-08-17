import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerpage! : FormGroup;
  constructor(private userservice:UserService,private formBuilder:FormBuilder) { 
    this.ngOnInit()
  }

  ngOnInit(): void {
    this.registerpage=this.formBuilder.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]],
      confirmpassword:['',[Validators.required]]

    })
  }

  regSubmit(){
    console.log(this.registerpage);
    let data={
      firstName:this.registerpage.value.firstName,
      lastName:this.registerpage.value.lastName,
      email:this.registerpage.value.email,
      password:this.registerpage.value.password
      
    }
    this.userservice.Register(data).subscribe((res:any)=>{
      console.log(res.message);
      localStorage.setItem('token',res.data);
    });
  }
}
