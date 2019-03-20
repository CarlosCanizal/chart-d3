const Chart = (title, total, data, units='') =>{

    if(!(typeof title === 'string'))throw "'title' should be a string";
    if(!(typeof total === 'number'))throw "'total' should be a number";
    if(!(typeof title === 'string'))throw "'title' should be a string";
    if(!Array.isArray(data)) throw "'data' should be an array";
    if(!data.length) throw "'data' should not be an empty array";
    if(!(typeof units === 'string'))throw "'units' should be a string";

    let state = {
        title : title,
        total : total,
        data : data,
        units : units
    }

    return Object.assign({},state);
};

export default Chart;