import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionPorteurComponent } from './inscription-porteur.component';

describe('InscriptionPorteurComponent', () => {
  let component: InscriptionPorteurComponent;
  let fixture: ComponentFixture<InscriptionPorteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscriptionPorteurComponent]
    });
    fixture = TestBed.createComponent(InscriptionPorteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
