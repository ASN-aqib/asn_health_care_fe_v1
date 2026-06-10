import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orderassignment } from './orderassignment';

describe('Orderassignment', () => {
  let component: Orderassignment;
  let fixture: ComponentFixture<Orderassignment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Orderassignment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Orderassignment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
