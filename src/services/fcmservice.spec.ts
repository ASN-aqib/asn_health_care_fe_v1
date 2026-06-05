import { TestBed } from '@angular/core/testing';

import { Fcmservice } from './fcmservice';

describe('Fcmservice', () => {
  let service: Fcmservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fcmservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
