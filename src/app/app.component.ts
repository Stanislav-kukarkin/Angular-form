import { identifierModuleUrl } from '@angular/compiler';
import { Renderer2 } from '@angular/core';
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
  modal = null
  close = null
  inputs = null
  select = null
  checkbox = null
  phone: string;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({

      surname: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern("[А-Яа-яЁё]{1,50}")]),
      name: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern("[А-Яа-яЁё]{1,50}")]),
      fathername: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern("[А-Яа-яЁё]{1,50}")]),
      login: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.pattern("[A-Za-z]{1,20}")]),
      phone: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      checkbox: new FormControl(''),
      city: new FormControl('')

    })

    this.modal = document.querySelector('#WindowModal');
  }


  Submit(){
    if (this.form.invalid) {
      return;
    }
    this.submitted = true

    const user = {
      surname: this.form.value.surname,
      name: this.form.value.name,
      fathername: this.form.value.fathername,
      login: this.form.value.login,
      phone: this.form.value.phone,
      email: this.form.value.email,
      checkbox: this.form.value.checkbox,
      city: this.form.value.city
    }

    console.log(JSON.stringify(user));
    this.modal.classList.remove('hide');
 }

 CloseForm(){
    this.modal.classList.add('hide');

    this.inputs = document.querySelectorAll('input');
    this.select = document.querySelectorAll('select');


    for (var i = 0;  i < this.inputs.length; i++) {
      this.inputs[i].value = '';
    };
    for (var i = 0;  i < this.select.length; i++) {
      this.select[i].value = '';
    };

 }



}
