import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ordermap } from './ordermap';

describe('Ordermap', () => {
  let component: Ordermap;
  let fixture: ComponentFixture<Ordermap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ordermap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ordermap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
