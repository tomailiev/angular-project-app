import { TestBed } from '@angular/core/testing';

import { EbikesApiService } from './ebikes-api.service';

describe('EbikesApiService', () => {
  let service: EbikesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EbikesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
