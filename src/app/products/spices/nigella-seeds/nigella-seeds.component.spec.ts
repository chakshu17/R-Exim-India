import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NigellaSeedsComponent } from './nigella-seeds.component';

describe('NigellaSeedsComponent', () => {
  let component: NigellaSeedsComponent;
  let fixture: ComponentFixture<NigellaSeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NigellaSeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NigellaSeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
