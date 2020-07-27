import midot from '../index';

describe('Volume units', () => {
  test('בדיקה של ביצה לכזית', () => {
    expect(midot(1).from('כביצה').to('כזית')).toBe(2);
  });

  test('בדיקה של ביצה לכגרוגרת', () => {
    expect(midot(1).from('כביצה').to('כגרוגרת')).toBe(3);
  });

  test('בדיקה של לוג לביצה', () => {
    expect(midot(1).from('לוג').to('כביצה')).toBe(6);
  });

  test('בדיקה של רביעית לעוכלא', () => {
    expect(midot(1).from('רביעית').to('עוכלא')).toBe(2);
  });

  test('בדיקה של כביצה לפרס', () => {
    expect(midot(1).from('פרס').to('כביצה')).toBe(3);
  });

  test('בדיקה של לוג לליטרא', () => {
    expect(midot(1).from('לוג').to('ליטרא')).toBe(2);
  });

  test('בדיקה של לוג לשמינית', () => {
    expect(midot(1).from('לוג').to('שמינית')).toBe(8);
  });

  test('בדיקה של לוג לקורטוב', () => {
    expect(midot(1).from('לוג').to('קורטוב')).toBe(64);
  });

  test('בדיקה של רביעית ללוג', () => {
    expect(midot(1).from('לוג').to('רביעית')).toBe(4);
  });

  test('בדיקה של קב ללוג', () => {
    expect(midot(1).from('קב').to('לוג')).toBe(4);
  });

  test('בדיקה של סאה לקב', () => {
    expect(midot(1).from('סאה').to('קב')).toBe(6);
  });

  test('בדיקה של קב להין', () => {
    expect(midot(1).from('הין').to('קב')).toBe(3);
  });

  test('בדיקה של איפה לסאה', () => {
    expect(midot(1).from('איפה').to('סאה')).toBe(3);
  });

  test('בדיקה של איפה לעומר', () => {
    expect(midot(1).from('איפה').to('עומר')).toBe(10);
  });

  test('בדיקה של כור ללתך', () => {
    expect(midot(1).from('כור').to('לתך')).toBe(2);
  });

  test('בדיקה של כור לאיפה', () => {
    expect(midot(1).from('כור').to('איפה')).toBe(10);
  });

  test('בדיקה של מקווה לסאה', () => {
    expect(midot(1).from('מקווה').to('סאה')).toBe(40);
  });
});
