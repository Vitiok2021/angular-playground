import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsExampleReactive } from './forms-example-reactive';

describe('FormsExampleReactive', () => {
  let component: FormsExampleReactive;
  let fixture: ComponentFixture<FormsExampleReactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsExampleReactive],
    }).compileComponents();

    fixture = TestBed.createComponent(FormsExampleReactive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
