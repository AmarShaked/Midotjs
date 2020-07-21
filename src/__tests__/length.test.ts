import midot from '../index';

describe('Length units', () => {
  test('בדיקה של טפח לאצבע', () => {
    expect(midot(2).from('טפח').to('אצבע')).toBe(8);
  });

  test('המרה בין מיל לריס', () => {
    expect(midot(1).from('מיל').to('ריס')).toBe(7.5);
  });
});
