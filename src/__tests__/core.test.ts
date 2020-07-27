import midot from '../index';

describe('Midot JS basic tests', () => {
  test('use .to before .from', () => {
    expect(() => midot(2).to('אצבע')).toThrowError(
      '.to must be called after .from',
    );
  });

  test('use .from before .to', () => {
    expect(() => {
      const midotForTest = midot(2);
      // For test purposes only
      // @ts-ignore
      midotForTest.destination = {
        name: {
          singular: 'ריס',
          plural: 'ריס',
        },
        anchor: 6400,
        system: 'length',
      };
      midotForTest.from('אצבע');
    }).toThrowError('.from must be called before .to');
  });

  test('convert two measures from different systems', () => {
    expect(() => midot(2).from('הין').to('אצבע')).toThrowError();
  });

  test('return the initial value if the measures are the same', () => {
    expect(midot(2).from('אצבע').to('אצבע')).toEqual(2);
  });

  test('throw if unsupported measurement in .from', () => {
    expect(() => midot(2).from('null')).toThrowError();
  });

  test('throw if unsupported measurement in .to', () => {
    expect(() => midot(2).from('אצבע').to('null')).toThrowError();
  });
});
