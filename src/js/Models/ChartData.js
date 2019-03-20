let ChartData = (label, percent, value)=>{
    let state  = {
        label : label,
        percent : percent,
        value : value
    }
    return Object.assign({}, state);
};

export default ChartData;