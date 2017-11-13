import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartywolfComponent } from './partywolf.component';

describe('PartywolfComponent', () => {
  let component: PartywolfComponent;
  let fixture: ComponentFixture<PartywolfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartywolfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartywolfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
