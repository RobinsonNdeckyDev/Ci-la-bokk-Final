import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilBailleurComponent } from './profil-bailleur.component';

describe('ProfilBailleurComponent', () => {
  let component: ProfilBailleurComponent;
  let fixture: ComponentFixture<ProfilBailleurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilBailleurComponent]
    });
    fixture = TestBed.createComponent(ProfilBailleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
