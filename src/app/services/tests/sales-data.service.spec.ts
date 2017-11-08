import { TestBed, inject } from '@angular/core/testing';

import { SalesDataService } from './sales-data.service';

describe('SalesDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalesDataService]
    });
  });

  it('should be created', inject([SalesDataService], (service: SalesDataService) => {
    expect(service).toBeTruthy();
  }));
});
