let LinearData = (date, value)=>{
    if(!(date instanceof Date))throw "'date' should be an instance of Date";
    if(!(typeof value === 'number'))throw "'value' should be a number";

    let state  = {
        date : date,
        value : value
    }
    return Object.assign({}, state);
};

export default LinearData