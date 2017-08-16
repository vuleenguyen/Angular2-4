import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { UserTestComponent } from './user-test.component';
import { UserService } from "./user.service";
import { DataService } from "../shared/data.service";

describe('Component: UserTest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserTestComponent]
    });
  })

  it('should create the app', ()=> {
    let fixture = TestBed.createComponent(UserTestComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })

  it('should use the user name from the service', () => {
    let fixture = TestBed.createComponent(UserTestComponent);
    let app = fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(userService.user.name).toEqual(app.user.name);
  })

  it('shouldn\'t display the user name if user isn\'t logged in', () => {
    let fixture = TestBed.createComponent(UserTestComponent);
    let app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toContain(app.user.name);
  })

  it('should display the user name if user is logged in', () => {
    let fixture = TestBed.createComponent(UserTestComponent);
    let app = fixture.debugElement.componentInstance;
    app.isLoggedIn = true;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(app.user.name);
  })

  it('shouldn\'t fetch successfully data if not use asynchronous', () => {
    let fixture = TestBed.createComponent(UserTestComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails')
                .and
                .returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    expect(app.data).toEqual(undefined);
  })

  it('should fetch successfully data if use asynchronous', async(() => {
    let fixture = TestBed.createComponent(UserTestComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails')
                .and
                .returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    fixture.whenStable().then(
      () => {
        expect(app.data).toEqual('Data');
      }
    );
  }))

  it('should fetch successfully data if use asynchronous', fakeAsync(() => {
    let fixture = TestBed.createComponent(UserTestComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails')
                .and
                .returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    tick();
    expect(app.data).toEqual('Data');
  }))
});
