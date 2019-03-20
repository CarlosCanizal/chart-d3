import Chart from '../src/js/Models/Chart';

test('throws when \'title\' is not a String', () => {
    expect(() => {
        Chart(1,200,[1,2,3])
    }).toThrow();
});

test('throws when \'total\' is not a Number', () => {
    expect(() => {
        Chart('Chart Title','200',[1,2,3],[1,2,3])
    }).toThrow();
});

test('throws when \'data\' is not passed as array', () => {
    expect(() => {
        Chart('Chart Title',200.34,1,[1,2,3])
    }).toThrow();
});

test('throws when \'linearData\' is not passed as array', () => {
    expect(() => {
        Chart('Chart Title',200.34,[1,2,3],1,'')
    }).toThrow();
});

test('throws when \'data\' is empty an array', () => {
    expect(() => {
        Chart('Chart Title',200,[],[1,2,3])
    }).toThrow();
});

test('the response when calls Chart Model with initial params', () => {
    const data = {
        label :'Label 1',
        percent: 40
    };
    const graph = Chart('Chart Title',200,[data],[1,2,3]);
    expect(graph).toEqual(expect.objectContaining({
        title : expect.any(String),
        total : expect.any(Number),
        units : expect.any(String),
        dataset : expect.any(Array)
    }));
});

test('throws when \'units\' is not a string', () => {
    expect(() => {
        Chart('Chart Title',200.34,[1,2,3],[1,2,3],1)
    }).toThrow();
});

test('the sum of data values should be equals to total', () => {
    const data = [{
            label :'Label 1',
            percent: 40
        },
        {
            label :'Label 2',
            percent: 15
        },
        {
            label :'Label 3',
            percent: 45
        }
    ];
    let total = 200;
    const chart = Chart('Chart Title',total, data,[1,2,3]);
    let sum = chart.dataset.reduce((prev, current)=> prev+current.value,0);
    expect(sum).toEqual(total);
});