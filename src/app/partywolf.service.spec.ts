import { TestBed, inject } from '@angular/core/testing';

import { PartywolfService } from './partywolf.service';

describe('PartywolfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartywolfService]
    });
  });

  it('should be created', inject([PartywolfService], (service: PartywolfService) => {
    expect(service).toBeTruthy();
  }));
});
