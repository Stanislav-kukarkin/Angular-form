import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  form: FormGroup
  submitted = false

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({

      surname: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern("[А-Яа-яЁё]{1,50}")]),
      name: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern("[А-Яа-яЁё]{1,50}")]),
      fathername: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern("[А-Яа-яЁё]{1,50}")]),
      login: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.pattern("[A-Za-z]{1,20}")]),
      phone: new FormControl('', [Validators.required, Validators.pattern("[0-9]{10}")]),
      email: new FormControl('', [Validators.required, Validators.email]),
      checkbox: new FormControl('')

    })
  }

  Submit(){
    if (this.form.invalid) {
      return;
    }
    this.submitted = true
 }
}
