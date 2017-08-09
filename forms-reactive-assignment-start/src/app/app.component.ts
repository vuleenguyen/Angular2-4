import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  projectStatus = ['Stable', 'Critical', 'Finished'];
  project = {
    'projectName' : '',
    'email' : '',
    'status' : ''
  }
  forbiddenProjectEmails = ['test@test.com'];

  submitted = false;

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName' : new FormControl(null, 
          [Validators.required, this.forbiddenProjectName], this.forbiddenProjectNameAsync),    
      'email' : new FormControl(null, [Validators.required, Validators.email],
           this.forbiddenEmails.bind(this)),
      'status' : new FormControl('Critical'),
    })
  }

  onSubmit() {
    this.submitted = true;
    this.project.projectName = this.projectForm.get('projectName').value;
    this.project.email = this.projectForm.get('email').value;
    this.project.status = this.projectForm.get('status').value;

    this.projectForm.reset({
      'status' : 'Critical'
    })
  }

  forbiddenProjectName(control: FormControl) : {[s: string] : boolean} {
    if (control.value === 'Test') {
      return {'forbiddenProjectName': true};
    }
    return null
  }

  forbiddenProjectNameAsync(control: FormControl) : Promise<any> | Observable<any> {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'vule') {
            resolve({'forbiddenProjectNameAsync' : true});
          } else {
            resolve(null);            
          }
        },1500)
      }
    );
    return promise;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (this.forbiddenProjectEmails.indexOf(control.value) !== -1) {
          resolve({emailIsForbidden: true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

}
