import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterSMComponent } from './router-sm.component';

describe('RouterSMComponent', () => {
  let component: RouterSMComponent;
  let fixture: ComponentFixture<RouterSMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterSMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterSMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
