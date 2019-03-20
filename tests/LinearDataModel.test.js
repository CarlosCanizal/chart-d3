import LinearData from '../src/js/Models/LinearData';

test('it throws when \'date\' is not an instance of Date', () => {
    expect(() => {
        LinearData('12-09-2019',100);
    }).toThrow();
});

test('it throws when \'value\' is not a number', () => {
    expect(() => {
        LinearData(new Date('2019', '01', '04'),'200');
    }).toThrow();
});

test('the response when calls LinearData Model with initial params', () => {
    const data = LinearData(new Date('2019', '01', '04'),200);
    expect(data).toEqual(expect.objectContaining({
        date : expect.any(Date),
        value: expect.any(Number)
    }));
});
