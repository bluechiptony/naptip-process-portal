import { TestBed } from '@angular/core/testing';

import { VictimServiceService } from './victim-service.service';

describe('VictimServiceService', () => {
  let service: VictimServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VictimServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
