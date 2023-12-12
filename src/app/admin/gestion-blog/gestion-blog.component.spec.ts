import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionBlogComponent } from './gestion-blog.component';

describe('GestionBlogComponent', () => {
  let component: GestionBlogComponent;
  let fixture: ComponentFixture<GestionBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionBlogComponent]
    });
    fixture = TestBed.createComponent(GestionBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
