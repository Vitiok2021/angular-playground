import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalComponent } from './local-component';
import { Logger } from '../../services/logger';

describe('LocalComponent', () => {
  let component: LocalComponent;
  let fixture: ComponentFixture<LocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalComponent],
      providers: [{ provide: Logger, useValue: { getLocalMessage: () => 'Hello from test' } }],
    }).compileComponents();

    fixture = TestBed.createComponent(LocalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
