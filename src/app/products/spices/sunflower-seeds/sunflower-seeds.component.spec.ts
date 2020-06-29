import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunflowerSeedsComponent } from './sunflower-seeds.component';

describe('SunflowerSeedsComponent', () => {
  let component: SunflowerSeedsComponent;
  let fixture: ComponentFixture<SunflowerSeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunflowerSeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunflowerSeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
