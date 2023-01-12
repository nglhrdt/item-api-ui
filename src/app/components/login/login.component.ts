import { Component, HostBinding } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  @HostBinding('class') cssClasses = 'h-full flex flex-column items-center justify-center p-4';

  loginFormGroup = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: [Validators.required, Validators.minLength(3)]
  });

  constructor(private formBuilder: FormBuilder) {}

  login(): void {}
}
