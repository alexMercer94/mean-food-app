import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  loginForm!: FormGroup;
  isSubmitted = false;
  returnUrl = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  public get loginFormControl() {
    return this.loginForm.controls;
  }

  public submit(): void {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;

    this.userService
      .login({
        email: this.loginFormControl.email.value,
        password: this.loginFormControl.password.value,
      })
      .subscribe(() => {
        this.router.navigateByUrl(this.returnUrl);
      });
  }
}
