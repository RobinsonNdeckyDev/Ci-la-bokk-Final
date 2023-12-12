import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPorteursComponent } from './gestion-porteurs.component';

describe('GestionPorteursComponent', () => {
  let component: GestionPorteursComponent;
  let fixture: ComponentFixture<GestionPorteursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionPorteursComponent]
    });
    fixture = TestBed.createComponent(GestionPorteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
