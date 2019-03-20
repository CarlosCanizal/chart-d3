const ChartView = (data, selector, theme='forestTheme')=>{
    
    if(!(typeof selector === 'string'))throw "'selector' should be a string";
    if(!(typeof theme === 'string'))throw "'theme' should be a string";

    let state ={
        data : data,
        selector: selector,
        theme: theme
    }

    let buildD3Chart = (selector, data)=>{
        let chart = html(selector, data);
        let chartContainer = document.getElementById(selector);
        chartContainer.innerHTML = chart;
    } 


    let html = (selector, data)=>{
        let sections = ``;

        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }

        let sections = data.reduce((prev, item, index)=>{
            let labelClass = 'left';
            if(index > 0){
                labelClass = 'right';
            }
            sections += `<div class="label ${labelClass} ${state.theme || 'forestTheme'}">
                            <div class="label-title">${item.label}</div>
                            <div class="label-data">
                                <span>${item.percent}%</span>
                                <span>${numberWithCommas(item.value)} ${state.data.units}</span>
                            </div>
                        </div>`    
        },'');

        return `<div class="chart">
                    <div class="chart-container">
                        <div class="title">${state.data.title}</div>
                        <div class="subtitle">${numberWithCommas(state.data.total)} ${state.data.units}</div>
                        <div class="donut" id="chart-${selector}"></div>
                        <div class="line-chart ${state.theme}" id="line-chart-${selector}"></div>
                    </div>
                    <div class="labels-container">
                        ${sections}
                        <div class="clear"></div>
                    </div>
                    </div>
                </div>`;
    }

    return Object.assign({buildD3Chart: buildD3Chart(state.selector, state.data.chartData)});

}

export default ChartView;