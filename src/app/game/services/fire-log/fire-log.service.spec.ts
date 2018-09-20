import { TestBed, inject } from '@angular/core/testing';

import { FireLogService } from './fire-log.service';

describe('FireLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireLogService]
    });
  });

  it('should be created', inject([FireLogService], (service: FireLogService) => {
    expect(service).toBeTruthy();
  }));
});
