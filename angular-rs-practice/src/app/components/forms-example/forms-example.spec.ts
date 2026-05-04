import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsExample } from './forms-example';

describe('FormsExample', () => {
  let component: FormsExample;
  let fixture: ComponentFixture<FormsExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsExample],
    }).compileComponents();

    fixture = TestBed.createComponent(FormsExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
