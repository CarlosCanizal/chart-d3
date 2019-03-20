import ChartView from './chartView';
import ChartData from '../Models/ChartData';

const MainView = controller =>{
    let data = controller.getData();
    for(let chartData of data){
        ChartView(chartData , 'charts');
    }
}

export default MainView;