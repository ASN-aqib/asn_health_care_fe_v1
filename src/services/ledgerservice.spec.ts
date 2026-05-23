import { TestBed } from '@angular/core/testing';

import { Ledgerservice } from './ledgerservice';

describe('Ledgerservice', () => {
  let service: Ledgerservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ledgerservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
