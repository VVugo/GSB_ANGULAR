import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from "../models/user.model";

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  loginForm: FormGroup;
  private user: User[];
  
  
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private route: Router){}
              
  
  ngOnInit(){
    this.initForm();
  }

  initForm(){
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      mdp: ['', Validators.required],
    });
  }
  
  onSubmitForm(){
    const formValue = this.loginForm.value;
    
    this.authService.getUserInfo(formValue.login, formValue.mdp).then(user =>{
      console.log('login ='+ user[0].login);
      this.route.navigate(['accueil']);

      
    });
  }
}