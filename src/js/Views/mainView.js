import ChartView from './chartView';

const MainView = controller =>{
    const themes =['forestTheme','waterTheme','sunTheme'];
    let data = controller.getData();
    data.forEach((chartData, index)=>{
        ChartView(chartData , 'charts', themes[index]);
    });
    addNavs(data.length);
}

const addNavs = (number)=>{
    let navs = document.getElementById('navs');
    for(let i=0; i< number; i++){
        const node = document.createElement("nav");
        node.setAttribute('class',"nav");
        node.setAttribute('index',i);
        node.addEventListener('click', handleClick);
        navs.appendChild(node);
    } 
}

const handleClick = (e)=>{
    let riel = document.getElementById('riel');
    let index = parseInt(e.target.getAttribute('index'));
    let offset = (carousel.offsetWidth*index*-1)+"px";
    riel.style.left = offset;
}

export default MainView;