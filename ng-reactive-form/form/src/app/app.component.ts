import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registerForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  isSubmitted = false;

  constructor(private fb: FormBuilder){}

  onSubmit(): void {
    console.log('submitted form', 
    this.registerForm.value,
    this.registerForm.invalid
    );
    this.isSubmitted = true
  }
}
