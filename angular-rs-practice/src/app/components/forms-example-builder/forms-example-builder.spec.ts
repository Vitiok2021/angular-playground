import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsExampleBuilder } from './forms-example-builder';

describe('FormsExampleBuilder', () => {
  let component: FormsExampleBuilder;
  let fixture: ComponentFixture<FormsExampleBuilder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsExampleBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(FormsExampleBuilder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
