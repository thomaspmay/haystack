import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityListingsComponent } from './activity-listings.component';

describe('ActivityListingsComponent', () => {
  let component: ActivityListingsComponent;
  let fixture: ComponentFixture<ActivityListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityListingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
