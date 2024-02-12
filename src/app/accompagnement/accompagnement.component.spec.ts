import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccompagnementComponent } from './accompagnement.component';

describe('AccompagnementComponent', () => {
  let component: AccompagnementComponent;
  let fixture: ComponentFixture<AccompagnementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccompagnementComponent]
    });
    fixture = TestBed.createComponent(AccompagnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
