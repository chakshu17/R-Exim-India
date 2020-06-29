import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardamomComponent } from './cardamom.component';

describe('CardamomComponent', () => {
  let component: CardamomComponent;
  let fixture: ComponentFixture<CardamomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardamomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardamomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
