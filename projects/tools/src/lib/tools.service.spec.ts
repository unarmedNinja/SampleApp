import { TestBed } from '@angular/core/testing';

import { ToolsService } from './tools.service';

describe('ToolsService', () => {
  let service: ToolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getdayofweek should return correct weekday for wed, 2', () => {
    let s = 'Wed';
    let k = 2;
    let expected = 'Fri';

    let actual = service.getDayOfWeek(s, k);
    expect(actual).toEqual(expected);
  });

  it('getdayofweek should return correct weekday for sat, 23', () => {
    let s = 'Sat';
    let k = 23;
    let expected = 'Mon';

    let actual = service.getDayOfWeek(s, k);
    expect(actual).toEqual(expected);
  });
});
