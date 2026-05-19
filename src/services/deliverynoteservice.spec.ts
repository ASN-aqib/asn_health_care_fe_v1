import { TestBed } from '@angular/core/testing';

import { Deliverynoteservice } from './deliverynoteservice';

describe('Deliverynoteservice', () => {
  let service: Deliverynoteservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Deliverynoteservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
