import { TestBed } from '@angular/core/testing';

import { ListeBailleurService } from './liste-bailleur.service';

describe('ListeBailleurService', () => {
  let service: ListeBailleurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeBailleurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
