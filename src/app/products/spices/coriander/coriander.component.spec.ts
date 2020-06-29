import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorianderComponent } from './coriander.component';

describe('CorianderComponent', () => {
  let component: CorianderComponent;
  let fixture: ComponentFixture<CorianderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorianderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorianderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
