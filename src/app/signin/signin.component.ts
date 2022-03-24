// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms'

// @Component({
//   selector: ' app-signin',
//   templateUrl: './signin.component.html',
//   styleUrls: ['./signin.component.scss']
// })
// export class SigninComponent implements OnInit {
//   registerForm: FormGroup = new FormGroup({
//     'first_name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
//     'last_name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
//     'email': new FormControl(null, [Validators.email, Validators.required]),
//     'password': new FormControl(null, [Validators.pattern(/^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])(?=.{8,})/), Validators.required])
//   })

//   getRegisterInfo(registerForm: any) {
//     if (registerForm.valid == true) {
//       console.log(registerForm.value);
//     }

//   }

//   constructor() { }

//   ngOnInit(): void {
//   }

// }