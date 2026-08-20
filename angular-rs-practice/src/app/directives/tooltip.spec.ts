import { Component } from '@angular/core';
import { Tooltip } from './tooltip';
import { TestBed } from '@angular/core/testing';
import { ComponentFixture } from '@angular/core/testing';

@Component({
  standalone: true,
  imports: [Tooltip],
  template: `<div appTooltip id="test-box">Наведи на мене мишку</div>`,
})
class TestHostComponent {}

describe('Tooltip', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    });
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });
  it('onmouseenter', () => {
    const div = fixture.nativeElement.querySelector('#test-box');
    div.dispatchEvent(new MouseEvent('mouseenter'));
    expect(div.style.backgroundColor).toBe('yellow');
  });
  it('onmouseleave', () => {
    const div = fixture.nativeElement.querySelector('#test-box');
    div.dispatchEvent(new MouseEvent('mouseleave'));
    expect(div.style.backgroundColor).toBe('');
  });
});
