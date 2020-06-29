import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FenugreekSeedsComponent } from './fenugreek-seeds.component';

describe('FenugreekSeedsComponent', () => {
  let component: FenugreekSeedsComponent;
  let fixture: ComponentFixture<FenugreekSeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FenugreekSeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FenugreekSeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
