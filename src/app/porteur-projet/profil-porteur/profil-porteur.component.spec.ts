import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPorteurComponent } from './profil-porteur.component';

describe('ProfilPorteurComponent', () => {
  let component: ProfilPorteurComponent;
  let fixture: ComponentFixture<ProfilPorteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilPorteurComponent]
    });
    fixture = TestBed.createComponent(ProfilPorteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
