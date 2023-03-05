import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesHttpService } from 'src/app/Common/CommonTS/serviceshttp.service';
import { ServicesPathService } from 'src/app/Common/CommonTS/servicespath.service';
import { Model_login } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public model: Model_login = new Model_login;
  addUserForm!: FormGroup;
  user:any='akhil';
  

  constructor(private path : ServicesPathService, private api : ServicesHttpService,private router:Router) { }

  ngOnInit(): void {
    this.addUserForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

    //this.Login();
  }

  Login(){
    this.api.post(this.path._test,this.model).subscribe({next:(res)=>{
        // console.log(res[0].Result);
        // alert("Successfull!"+ res[0].Result);
          if(res[0].Result=='OK')
          this.router.navigate(['Home']);
          else{
            this.router.navigate(['**']);
          }

      },
      error:(err)=>{
        alert("Error while fetching the Records!")
      }
    })
  }

}
