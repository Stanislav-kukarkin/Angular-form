import { Renderer2 } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { ServService } from './serv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  form: FormGroup
  submitted = false
  modal = document.querySelector('#showModal')

  constructor(
    private renderer: Renderer2
    //public serv: ServService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({

      surname: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern("[А-Яа-яЁё]{1,50}")]),
      name: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern("[А-Яа-яЁё]{1,50}")]),
      fathername: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern("[А-Яа-яЁё]{1,50}")]),
      login: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.pattern("[A-Za-z]{1,20}")]),
      phone: new FormControl('', [Validators.required, Validators.pattern("[0-9]{10}")]),
      email: new FormControl('', [Validators.required, Validators.email]),
      checkbox: new FormControl(''),
      city: new FormControl('')

    })
  }

  click (event) {
    this.renderer.removeClass(event.target, 'hide');
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
    //this.modal.classList.remove('hide')
    this.click(event);
 }



}
