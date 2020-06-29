import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinseedsComponent } from './linseeds.component';

describe('LinseedsComponent', () => {
  let component: LinseedsComponent;
  let fixture: ComponentFixture<LinseedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinseedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinseedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
