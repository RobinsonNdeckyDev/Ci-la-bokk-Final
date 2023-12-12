import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeInvestissementBailleurComponent } from './liste-investissement-bailleur.component';

describe('ListeInvestissementBailleurComponent', () => {
  let component: ListeInvestissementBailleurComponent;
  let fixture: ComponentFixture<ListeInvestissementBailleurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeInvestissementBailleurComponent]
    });
    fixture = TestBed.createComponent(ListeInvestissementBailleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
