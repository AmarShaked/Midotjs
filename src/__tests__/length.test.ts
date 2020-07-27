import midot from '../index';

describe('Length units', () => {
  test('בדיקה של טפח לאצבע', () => {
    expect(midot(2).from('טפח').to('אצבע')).toBe(8);
  });

  test('המרה בין מיל לריס', () => {
    expect(midot(1).from('מיל').to('ריס')).toBe(7.5);
  });

  test('המרה בין אצבע לאגודל', () => {
    expect(midot(2).from('אצבע').to('אגודל')).toBe(2);
  });

  test('המרה בין טפח לסיט', () => {
    expect(midot(4).from('טפח').to('סיט')).toBe(4);
  });

  test('המרה בין זרת לטפח', () => {
    expect(midot(1).from('זרת').to('טפח')).toBe(3);
  });

  test('המרה בין אמה לטפח', () => {
    expect(midot(1).from('אמה').to('טפח')).toBe(6);
  });

  test('המרה בין אמה למיל', () => {
    expect(midot(1).from('מיל').to('אמה')).toBe(2000);
  });

  test('המרה בין פרסה למיל', () => {
    expect(midot(1).from('פרסה').to('מיל')).toBe(4);
  });
});
