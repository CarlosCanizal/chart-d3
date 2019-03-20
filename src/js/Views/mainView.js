import ChartView from './chartView';

const MainView = controller =>{
    let data = controller.getData();
	ChartView(data[0],'chart-1');
}

export default MainView;