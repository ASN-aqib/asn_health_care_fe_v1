import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resourcelist } from './resourcelist';

describe('Resourcelist', () => {
  let component: Resourcelist;
  let fixture: ComponentFixture<Resourcelist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resourcelist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Resourcelist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
