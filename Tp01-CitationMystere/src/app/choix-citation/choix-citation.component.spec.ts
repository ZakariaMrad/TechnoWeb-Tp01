import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixCitationComponent } from './choix-citation.component';

describe('ChoixCitationComponent', () => {
  let component: ChoixCitationComponent;
  let fixture: ComponentFixture<ChoixCitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoixCitationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoixCitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
