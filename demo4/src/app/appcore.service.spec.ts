import { TestBed } from '@angular/core/testing';

import { AppcoreService } from './appcore.service';

describe('AppcoreService', () => {
  let service: AppcoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppcoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
