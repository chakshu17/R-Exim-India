import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmericComponent } from './turmeric.component';

describe('TurmericComponent', () => {
  let component: TurmericComponent;
  let fixture: ComponentFixture<TurmericComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurmericComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
