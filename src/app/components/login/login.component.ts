import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isSpining: boolean = false;
  loginform!: FormGroup;
  constructor(private fb:FormBuilder) { } 
  ngOnInit(): void {
    this.loginform = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    })
  }

login()
{
  console.log(this.loginform.value);

}

}
