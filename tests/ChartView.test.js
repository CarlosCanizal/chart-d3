import ChartView from '../src/js/Views/chartView';

test('throws when \'selector\' is not a String', () => {
    expect(() => {
        ChartView([],1,'forestTheme');
    }).toThrow();
});

test('throws when \'theme\' is not a String', () => {
    expect(() => {
        ChartView([],'chart-1',1);
    }).toThrow();
});
