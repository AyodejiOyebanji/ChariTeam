import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserRegistrationService } from '../service/user-registration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public loader: boolean = false
  countries = [{ code: 'USA', name: 'United States' }, { code: 'CAN', name: 'Canada' }, { code: 'AUS', name: 'Australia' }, { code: 'GBR', name: 'United Kingdom' }];
  constructor(private router: Router, private _formBuilder: FormBuilder, private _snackBar: MatSnackBar, private _userRegSer:UserRegistrationService) { }
  public signUpForm = this._formBuilder.group({
    firstname: [
      '', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]
    ],
    lastname: [
      '', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]
    ],
    email: [
      '', [Validators.required, Validators.email]
    ],
    contact: [
      '', [Validators.required, Validators.minLength(11)]
    ],
    country: [
      '', [Validators.required]
    ],
    healthExpert: ['', Validators.required,],
    gender: ['', Validators.required]

  })
  ngOnInit(): void {
  }

  signUp() {

    if (this.signUpForm.invalid) {
      this._snackBar.open("Kindly fill all the field ", 'Close');

    } else {

       this.router.navigate(["/signup/email"])

    }

  }

}

