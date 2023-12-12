import { TestBed } from '@angular/core/testing';

import { ListePorteurProjetService } from './liste-porteur-projet.service';

describe('ListePorteurProjetService', () => {
  let service: ListePorteurProjetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListePorteurProjetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
