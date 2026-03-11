import { TestBed } from '@angular/core/testing';

import { Useractivityservice } from './useractivityservice';

describe('Useractivityservice', () => {
  let service: Useractivityservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Useractivityservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
