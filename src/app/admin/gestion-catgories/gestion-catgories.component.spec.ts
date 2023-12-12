import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCatgoriesComponent } from './gestion-catgories.component';

describe('GestionCatgoriesComponent', () => {
  let component: GestionCatgoriesComponent;
  let fixture: ComponentFixture<GestionCatgoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionCatgoriesComponent]
    });
    fixture = TestBed.createComponent(GestionCatgoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
