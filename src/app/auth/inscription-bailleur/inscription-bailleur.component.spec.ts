import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionBailleurComponent } from './inscription-bailleur.component';

describe('InscriptionBailleurComponent', () => {
  let component: InscriptionBailleurComponent;
  let fixture: ComponentFixture<InscriptionBailleurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscriptionBailleurComponent]
    });
    fixture = TestBed.createComponent(InscriptionBailleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
