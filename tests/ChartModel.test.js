import Chart from '../src/js/Models/Chart';

test('the response when calls Chart Model ', () => {
    const graph = Chart('Tilte1',200,[]);
    expect(graph).toEqual(expect.objectContaining({
        title : expect.any(String),
        total : expect.any(Number)
    }));
});