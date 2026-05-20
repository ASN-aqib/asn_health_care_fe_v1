import { TestBed } from '@angular/core/testing';

import { Buyerservice } from './buyerservice';

describe('Buyerservice', () => {
  let service: Buyerservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Buyerservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
