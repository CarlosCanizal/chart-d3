import ChartData from './ChartData';
import LinearData from './LinearData';

const Chart = (title, total, data, linearData, units='') =>{

    if(!(typeof title === 'string'))throw "'title' should be a string";
    if(!(typeof total === 'number'))throw "'total' should be a number";
    if(!(typeof title === 'string'))throw "'title' should be a string";
    if(!Array.isArray(data)) throw "'data' should be an array";
    if(!Array.isArray(linearData)) throw "'linearData' should be an array";
    if(!data.length) throw "'data' should not be an empty array";
    if(!(typeof units === 'string'))throw "'units' should be a string";

    let state = {
        title : title,
        total : total,
        units : units,
        
    }

    let getData = (data, total) => {
        return data.map((item)=>{
            let value = parseFloat((total*(item.percent/100)).toFixed(2));
            return ChartData(item.label, item.percent, value);
        });
    }

    let getLinearData = (data) => {
        return data.map( item => LinearData(item.date, item.value));
    }

    return Object.assign({},state,{dataset:getData(data, state.total), linearData:getLinearData(linearData)});
};

export default Chart;