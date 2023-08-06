import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMAIL_PATTERN } from 'src/app/core/data/constants/regex';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form!: FormGroup;
  loading = false;
  error = ''
  success = ''

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {
    this.generateForm();
  }

  generateForm(): void {
    this.form = this._formBuilder.group({
      username: [
        '', // default value
        [ // array of validators
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      password: [
        '', // default value
        [ // array of validators
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10)
        ]
      ],
    });
  }

  onSubmit(): void {
    this.loading = true;
    this.error = '';
    this.success = '';
    this._authService.login(this.form.value)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.success = 'Login successful!'
          this._router.navigate(['/products']);
        },
        error: (err) => {
          this.loading = false;
          this.error = 'Login failed!'
        },
        complete: () => {
          this.loading = false;
          this.error = '';
        }
      });
  }
}
