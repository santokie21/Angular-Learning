import { TestBed } from '@angular/core/testing';

import { RoomService } from './rooms.service';

describe('RoomsServiceService', () => {
  let service: RoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
