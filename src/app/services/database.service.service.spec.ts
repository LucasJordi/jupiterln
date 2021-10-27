import { TestBed } from '@angular/core/testing';

import { Database.ServiceService } from './database.service.service';

describe('Database.ServiceService', () => {
  let service: Database.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Database.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
