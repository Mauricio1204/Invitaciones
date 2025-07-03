import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Boda1Component } from './boda-1.component';

describe('Boda1Component', () => {
  let component: Boda1Component;
  let fixture: ComponentFixture<Boda1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Boda1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Boda1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
