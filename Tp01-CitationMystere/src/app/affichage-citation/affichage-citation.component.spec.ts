import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageCitationComponent } from './affichage-citation.component';

describe('AffichageCitationComponent', () => {
  let component: AffichageCitationComponent;
  let fixture: ComponentFixture<AffichageCitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageCitationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichageCitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
