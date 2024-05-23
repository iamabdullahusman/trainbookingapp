import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm!: FormGroup
  isSpinning: boolean = false;
  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      name:[null,[Validators.required]],
      password:[null,[Validators.required]],
      confirmPassword:[null,[Validators.required, this.confirmationValidate]],
    })
  }
  confirmationValidate = (control: FormControl): {[s: string]: boolean}=>{
  
    if(!control.value) {
      return {required: true};
    }
    else if(control.value !== this.signupForm.controls['password'].value){
      return {confirm: true, error : true};
    }
  return {};
  };

  signup()
  {
    console.log(this.signupForm.value);

  }

}
