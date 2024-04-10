import clsNames from './classNames';

describe('Проверка ф-ци clsNames', () => {
  test('Проверка базовой работы', () => {
    expect(clsNames('exampleClass')).toBe('exampleClass');
  });

  test('Проверка базовой работы с модами', () => {
    expect(clsNames('exampleClass', { mod1: true, mod2: false })).toBe('exampleClass mod1');
  });

  test('Проверка базовой работы с дополнениями', () => {
    expect(clsNames('exampleClass', {}, ['additional1'])).toBe('exampleClass additional1');
  });

  test('Проверка базовой работы с модами и дополнениями', () => {
    const expected = 'exampleClass mod1 additional';
    expect(
      clsNames('exampleClass', { modUndef: false, mod1: true, mod2: false }, ['additional']),
    ).toBe(expected);
  });
});
