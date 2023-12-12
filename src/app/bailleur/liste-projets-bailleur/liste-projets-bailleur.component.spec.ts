import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProjetsBailleurComponent } from './liste-projets-bailleur.component';

describe('ListeProjetsBailleurComponent', () => {
  let component: ListeProjetsBailleurComponent;
  let fixture: ComponentFixture<ListeProjetsBailleurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeProjetsBailleurComponent]
    });
    fixture = TestBed.createComponent(ListeProjetsBailleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
