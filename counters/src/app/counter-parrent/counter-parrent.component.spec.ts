import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterParrentComponent } from './counter-parrent.component';

describe('CounterParrentComponent', () => {
  let component: CounterParrentComponent;
  let fixture: ComponentFixture<CounterParrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterParrentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterParrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
