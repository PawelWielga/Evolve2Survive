import { TestBed } from '@angular/core/testing';
import { PlayerGuard } from './player.guard.service';

describe('PlayerGuard', () => {
  let service: PlayerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


