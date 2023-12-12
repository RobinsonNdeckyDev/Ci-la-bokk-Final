import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionBailleursComponent } from './gestion-bailleurs.component';

describe('GestionBailleursComponent', () => {
  let component: GestionBailleursComponent;
  let fixture: ComponentFixture<GestionBailleursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionBailleursComponent]
    });
    fixture = TestBed.createComponent(GestionBailleursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
