import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNonExpertComponent } from './user-non-expert.component';

describe('UserNonExpertComponent', () => {
  let component: UserNonExpertComponent;
  let fixture: ComponentFixture<UserNonExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNonExpertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserNonExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
