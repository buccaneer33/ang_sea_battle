import { TestBed, inject } from '@angular/core/testing';

import { ShipPositionService } from './ship-position.service';

describe('ShipPositionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShipPositionService]
    });
  });

  it('should be created', inject([ShipPositionService], (service: ShipPositionService) => {
    expect(service).toBeTruthy();
  }));
});
