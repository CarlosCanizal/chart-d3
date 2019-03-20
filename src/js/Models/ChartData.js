let ChartData = (label, percent, value)=>{
    if(!(typeof label === 'string'))throw "'label' should be a string";
    if(!(typeof percent === 'number'))throw "'percent' should be a number";
    if(!(percent >= 0 && percent <=100))throw "'percent' should be in 0-100 range";
    if(!(typeof value === 'number'))throw "'value' should be a number";
    

    let state  = {
        label : label,
        percent : percent,
        value : value
    }
    return Object.assign({}, state);
};

export default ChartData;