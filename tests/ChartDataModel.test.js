import ChartData from '../src/js/Models/ChartData';

test('it throws when \'title\' is not a String', () => {
    expect(() => {
        ChartData(1,40,40);
    }).toThrow();
});

test('it throws when \'percent\' is not a Number', () => {
    expect(() => {
        ChartData('Label 1','40',40);
    }).toThrow();
});

test('it throws when \'percent\' is not in 0-100 range', () => {
    expect(() => {
        ChartData('Label 1',101,40);
    }).toThrow();
});

test('it throws when \'value\' is not a Number', () => {
    expect(() => {
        ChartData('Label 1',40,'40');
    }).toThrow();
});

test('the response when calls ChartData Model with initial params', () => {
    const data = ChartData('Label 1',40,40);
    expect(data).toEqual(expect.objectContaining({
        label : expect.any(String),
        percent : expect.toBeWithinRange(0, 100),
        value: expect.any(Number)
    }));
});

expect.extend({
    toBeWithinRange(received, floor, ceiling) {
      const pass = received >= floor && received <= ceiling;
      if (pass) {
        return {
          message: () =>
            `expected ${received} not to be within range ${floor} - ${ceiling}`,
          pass: true,
        };
      } else {
        return {
          message: () =>
            `expected ${received} to be within range ${floor} - ${ceiling}`,
          pass: false,
        };
      }
    },
  });