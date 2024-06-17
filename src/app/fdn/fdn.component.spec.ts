import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FDNComponent } from './fdn.component';

describe('FDNComponent', () => {
  let component: FDNComponent;
  let fixture: ComponentFixture<FDNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FDNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FDNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
