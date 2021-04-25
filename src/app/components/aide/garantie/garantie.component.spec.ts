import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarantieComponent } from './garantie.component';

describe('GarantieComponent', () => {
  let component: GarantieComponent;
  let fixture: ComponentFixture<GarantieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarantieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GarantieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
