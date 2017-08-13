import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from "../auth.service";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @ViewChild("f") signinForm: NgForm;

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSignIn() {
    const email = this.signinForm.value["email"];
    const password = this.signinForm.value["password"];
    this.authService.signinUser(email,password);
  }
}
