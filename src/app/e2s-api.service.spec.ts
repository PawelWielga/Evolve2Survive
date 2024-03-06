import { TestBed } from '@angular/core/testing';

import { E2sAPIService } from './e2s-api.service';

describe('E2sAPIService', () => {
  let service: E2sAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(E2sAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
