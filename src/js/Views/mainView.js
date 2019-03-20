import ChartView from './chartView';
import ChartData from '../Models/ChartData';

const MainView = controller =>{
    const themes =['forestTheme','waterTheme','sunTheme'];
    let data = controller.getData();
    data.forEach((chartData, index)=>{
        ChartView(chartData , 'charts', themes[index]);
    })
}

export default MainView;