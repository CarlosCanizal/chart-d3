
const ChartView = (data, selector, theme='forestTheme')=>{
    
    if(!(typeof selector === 'string'))throw "'selector' should be a string";
    if(!(typeof theme === 'string'))throw "'theme' should be a string";

    const state ={
        data : data,
        selector: selector,
        theme: theme
    }

    const buildD3Chart = (data, selector, theme)=>{
        const randomId = Math.floor((Math.random() * 1000) + 1);
        const chartId = 'chart-'+randomId;
        const node = document.createElement("div");
        node.setAttribute('id',chartId);
        document.getElementById(selector).appendChild(node);

        let chartContainer = document.getElementById(chartId);
        let chart = html(data, chartId);
        chartContainer.innerHTML = chart;
        builD3Arcs(data, 'circle-'+chartId, theme);
    } 

    const builD3Arcs = (dataset, selector, theme)=>{
        const w = 158;
        const h = 158;

        const outerRadius = 79;
        const innerRadius = 72;
        let arc = d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);
        
        const themes ={
            'forestTheme':['#3B661D','#91CC59'],
            'waterTheme':['#2B4C5E','#65C1DE'],
            'sunTheme':['#B34C20','#F1BA29']
        }

        const color = d3.scaleOrdinal().range(themes[theme]);
        let svg = d3.select("#"+selector)
            .append("svg")
            .attr("width", w)
            .attr("height", h);


        let pie = d3.pie()
        .value( ( d, i ) =>d.percent )
        .sort(null);
        var arcs = svg.selectAll("g.arc")
            .data(pie(dataset))
            .enter()
            .append("g")
            .attr("class", "arc")
            .attr('stroke-width', '0')
            .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");
        arcs.append("path")
            .attr("fill", ( d, i )=>color(i))
            .attr("d", arc).style('stroke', 'white');
    }


    let html = (data, selector)=>{

        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }

        let sections = data.reduce((prev, item, index)=>{
            let labelClass = 'left';
            if(index > 0){
                labelClass = 'right';
            }
            return prev += `<div class="label ${labelClass} ${state.theme || 'forestTheme'}">
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
                        <div class="donut" id="circle-${selector}"></div>
                        <div class="line-chart ${state.theme}" id="line-chart-${selector}"></div>
                    </div>
                    <div class="labels-container clearfix">
                        ${sections}
                    </div>
                    </div>
                </div>`;
    }

    return Object.assign({buildD3Chart: buildD3Chart(state.data.chartData, state.selector, state.theme)});

}

export default ChartView;