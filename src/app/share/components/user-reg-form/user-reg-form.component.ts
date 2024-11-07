import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-reg-form',
  templateUrl: './user-reg-form.component.html',
  styleUrls: ['./user-reg-form.component.scss']
})
export class UserRegFormComponent implements OnInit {
  signInform !: FormGroup;
  constructor() { }
  
  ngOnInit(): void {
    this.createSignInform();
  }

  createSignInform(){
     this.signInform = new FormGroup({
     username : new FormControl(null, [Validators.required]),
     email : new FormControl(null, [Validators.required]),
     password : new FormControl(null, [Validators.required])
     })
    }
    
    get f(){
        return this.signInform.controls
    }
}
