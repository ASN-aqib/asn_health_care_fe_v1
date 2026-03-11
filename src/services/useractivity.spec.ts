import { TestBed } from '@angular/core/testing';

import { Useractivity } from './useractivity';

describe('Useractivity', () => {
  let service: Useractivity;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Useractivity);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
