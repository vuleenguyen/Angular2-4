import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("form") assignmentForm: NgForm; 

  defaultSubscription = 'Advanced';
  submitted = false;
  user = {
    email: '',
    subscription: '',
    password: '',
  }

  onSubmit() {
    this.submitted = true;

    this.user.email = this.assignmentForm.value.email;
    this.user.subscription = this.assignmentForm.value.subscription;
    this.user.password = this.assignmentForm.value.password;
    this.user.password = "****" + this.user.password.slice(this.user.password.length-4);

    this.assignmentForm.reset();
  }
}
