import Chart from '../src/js/Models/Chart';

test('throws when \'title\' is not a String', () => {
    expect(() => {
        Chart(1,200,[1,2,3])
    }).toThrow();
});

test('throws when \'total\' is not a Number', () => {
    expect(() => {
        Chart('Chart Title','200',[1,2,3])
    }).toThrow();
});

test('throws when \'data\' is not passed as array', () => {
    expect(() => {
        Chart('Chart Title',200.34,1)
    }).toThrow();
});

test('throws when \'data\' is empty an array', () => {
    expect(() => {
        Chart('Chart Title',200,[])
    }).toThrow();
});

test('the response when calls Chart Model with initial params', () => {
    const graph = Chart('Chart Title',200,[1,2,3]);
    expect(graph).toEqual(expect.objectContaining({
        title : expect.any(String),
        total : expect.any(Number),
        data : expect.any(Array),
        units : expect.any(String)
    }));
});

test('throws when \'units\' is not a string', () => {
    expect(() => {
        Chart('Chart Title',200.34,[1,2,3],1)
    }).toThrow();
});