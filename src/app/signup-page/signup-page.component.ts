import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  signupform = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    
  }
}
