import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GingerComponent } from './ginger.component';

describe('GingerComponent', () => {
  let component: GingerComponent;
  let fixture: ComponentFixture<GingerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GingerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
