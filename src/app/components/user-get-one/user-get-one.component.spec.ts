import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGetOneComponent } from './user-get-one.component';

describe('UserGetOneComponent', () => {
  let component: UserGetOneComponent;
  let fixture: ComponentFixture<UserGetOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGetOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGetOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
