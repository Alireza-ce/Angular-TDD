import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with username and password fields', () => {
    let form = component.loginForm;
    expect(form.contains('username')).toBeTruthy();
    expect(form.contains('password')).toBeTruthy();
  });

  it('check form field validation', () => {
    component.loginForm.patchValue({
      username: 'ali',
      password: '',
    });

    expect(component.loginForm.invalid).toBeTruthy();
  });
});
