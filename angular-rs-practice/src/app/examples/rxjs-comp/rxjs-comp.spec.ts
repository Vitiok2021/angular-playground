import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsComp } from './rxjs-comp';

describe('RxjsComp', () => {
  let component: RxjsComp;
  let fixture: ComponentFixture<RxjsComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsComp],
    }).compileComponents();

    fixture = TestBed.createComponent(RxjsComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
