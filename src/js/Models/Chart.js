import ChartData from './ChartData';
import { get } from 'https';

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
        units : units
    }

    let getData = (data, total) => {
        let dataList =[];
        for(let item of data){
            let value = parseFloat((total*(item.percent/100)).toFixed(2))
            dataList.push(
                ChartData(item.label, item.percent, value)
            );
        }
        return dataList;
    }

    return Object.assign({},state,{dataset:getData(data, state.total)});
};

export default Chart;