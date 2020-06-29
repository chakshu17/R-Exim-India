import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SesameSeedsComponent } from './sesame-seeds.component';

describe('SesameSeedsComponent', () => {
  let component: SesameSeedsComponent;
  let fixture: ComponentFixture<SesameSeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SesameSeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SesameSeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
