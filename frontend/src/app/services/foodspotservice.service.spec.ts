/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FoodspotserviceService } from './foodspotservice.service';

describe('Service: Foodspotservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodspotserviceService]
    });
  });

  it('should ...', inject([FoodspotserviceService], (service: FoodspotserviceService) => {
    expect(service).toBeTruthy();
  }));
});
