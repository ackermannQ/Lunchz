/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PhotoserviceService } from './photoservice.service';

describe('Service: Photoservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoserviceService]
    });
  });

  it('should ...', inject([PhotoserviceService], (service: PhotoserviceService) => {
    expect(service).toBeTruthy();
  }));
});
