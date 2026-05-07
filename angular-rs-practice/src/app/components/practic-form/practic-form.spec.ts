import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PracticForm } from './practic-form';
import { By } from '@angular/platform-browser';
import { vi } from 'vitest';

describe('PracticForm (Справжній тест)', () => {
  let component: PracticForm;
  let fixture: ComponentFixture<PracticForm>;

  // beforeEach запускається перед КОЖНИМ тестом (it), щоб завжди давати нам чисту форму
  beforeEach(async () => {
    // 1. Налаштовуємо віртуальну кімнату
    await TestBed.configureTestingModule({
      imports: [PracticForm], // Кажемо TestBed: "Занеси сюди наш компонент"
    }).compileComponents();

    // 2. Створюємо "пульт керування" (fixture)
    fixture = TestBed.createComponent(PracticForm);

    // 3. Дістаємо з пульта наш "живий" клас (інстанс)
    component = fixture.componentInstance;
    // НАШИЙ НОВИЙ РЯДОК: Тиснемо кнопку "Play", щоб Angular запустив ngOnInit
    fixture.detectChanges();
  });

  it('повинен успішно створитися', () => {
    // Просто перевіряємо, що Angular зміг зібрати наш компонент і він існує
    expect(component).toBeTruthy();
  });
  it('повинна ініціалізуватися форма itemForm', () => {
    expect(component.itemForm).toBeDefined();
  });
  it('форма повинна мати порожнє поле id при ініціалізації', () => {
    const idControl = component.itemForm.get('id');
    expect(idControl).toBeTruthy();
    expect(idControl?.value).toEqual('');
  });
  it('повинен відображати кнопку Send form', () => {
    const submitBtn = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
    expect(submitBtn.textContent).toContain('Send form');
  });
  it('повинен викликати подію save при сабміті', () => {
    vi.spyOn(component.save, 'emit');
    component.itemForm.get('id')?.setValue('123');
    component.submit();
    expect(component.save.emit).toHaveBeenCalled();
  });

  it('повинен вміти перемотувати час', () => {
    vi.useFakeTimers();
    let isSaved = false;
    setTimeout(() => {
      isSaved = true;
    }, 2000);
    expect(isSaved).toBeFalsy();
    vi.advanceTimersByTime(2000);
    expect(isSaved).toBeTruthy();
    vi.useRealTimers();
  });
});
