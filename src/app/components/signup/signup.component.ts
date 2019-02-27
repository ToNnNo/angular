import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '../../validators/custom-validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: FormControl;
  password: FormControl;
  confirm: FormControl;
  term: FormControl;

  form: FormGroup;

  private passwordMinLength = 8;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    // FormControl(default value, [Validators], [Asynchronus Validators])
    this.email = new FormControl(null, [
      Validators.required,
      CustomValidators.email()
    ]);
    this.password = new FormControl(null, [
      Validators.required,
      Validators.minLength(this.passwordMinLength)
    ]);
    this.confirm = new FormControl(null, [Validators.required]);
    this.term = new FormControl(false, [Validators.requiredTrue]);

    this.form = this.fb.group({
      email: this.email,
      password: this.password,
      confirm: this.confirm,
      term: this.term,
    });
  }

  public signup() {

    for ( const key in this.form.controls) {
      if (this.form.contains(key)) {
        this.form.get(key).markAsTouched();
        this.form.get(key).markAsDirty();
      }
    }

    if (this.form.valid) {

      console.log(this.form.value);
      this.form.reset();

    }
  }

  public controlEmail(): string|boolean {
    if ( this.email.touched ) {
      if (this.email.hasError('required')) {
        return `L'adresse email est obligatoire`;
      }

      if (this.email.hasError('error_email')) {
        return `L'adresse email n'est pas valide`;
      }
    }

    return false;
  }

  public controlPassword(): string|boolean {
    if ( this.password.touched ) {
      if (this.password.hasError('required')) {
        return `Le mot de passe est obligatoire`;
      }

      if (this.password.hasError('minlength')) {
        return `le mot de passe doit contenir ${this.passwordMinLength} caractères
          (actuellement ${this.password.value.length})`;
      }
    }

    return false;
  }

  public controlConfirm(): string|boolean {
    if ( this.confirm.touched ) {
      if (this.confirm.hasError('required')) {
        return `La confirmation est obligatoire`;
      }
    }

    return false;
  }

  public controlTerm(): string|boolean {
    if ( this.term.dirty ) {
      if (this.term.hasError('required')) {
        return `Accepter les CGU`;
      }
    }

    return false;
  }

}
