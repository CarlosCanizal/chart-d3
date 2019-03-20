import ChartData from '../src/js/Models/ChartData';

test('the response when calls ChartData Model with initial params', () => {
    const data = ChartData('Label 1',40,40);
    expect(data).toEqual(expect.objectContaining({
        label : expect.any(String),
        percent : expect.any(Number),
        value: expect.any(Number)
    }));
});