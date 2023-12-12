import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestissementPorteurComponent } from './investissement-porteur.component';

describe('InvestissementPorteurComponent', () => {
  let component: InvestissementPorteurComponent;
  let fixture: ComponentFixture<InvestissementPorteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestissementPorteurComponent]
    });
    fixture = TestBed.createComponent(InvestissementPorteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
