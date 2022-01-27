import { TestBed } from '@angular/core/testing';

import { GetnewsService } from './getnews.service';

describe('GetnewsService', () => {
  let service: GetnewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetnewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
