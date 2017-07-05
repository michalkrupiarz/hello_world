import { TestBed, inject } from '@angular/core/testing';

import { MockPriceService } from './mockprice.service';

describe('MockpriceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockPriceService]
    });
  });

  it('should be created', inject([MockPriceService], (service: MockPriceService) => {
    expect(service).toBeTruthy();
  }));
});
