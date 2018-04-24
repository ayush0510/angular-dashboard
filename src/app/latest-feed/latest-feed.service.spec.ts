import { TestBed, inject } from '@angular/core/testing';

import { LatestFeedService } from './latest-feed.service';

describe('LatestFeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LatestFeedService]
    });
  });

  it('should be created', inject([LatestFeedService], (service: LatestFeedService) => {
    expect(service).toBeTruthy();
  }));
});
