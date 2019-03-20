import { data } from './data/data';
import Chart from '../Models/Chart.js';

const MainController = {
    getData : function(){
        return data.map( item =>{
            return Chart(item.title, item.total, item.data, item.linearData, item.units);
        });
    }
}

export default MainController;