import { TestBed } from '@angular/core/testing';

import { MyApiCalssService } from './my-api-calss.service';

describe('MyApiCalssService', () => {
  let service: MyApiCalssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyApiCalssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
