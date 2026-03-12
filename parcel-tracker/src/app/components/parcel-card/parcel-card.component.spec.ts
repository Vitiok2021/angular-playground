import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelCardComponent } from './parcel-card.component';

describe('ParcelCardComponent', () => {
  let component: ParcelCardComponent;
  let fixture: ComponentFixture<ParcelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParcelCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParcelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
