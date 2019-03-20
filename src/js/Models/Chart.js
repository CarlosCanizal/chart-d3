const Chart = (title, total) =>{
    let state = {
        title : title,
        total : total
    }

    return Object.assign({},state);
};

export default Chart;