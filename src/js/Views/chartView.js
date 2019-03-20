
const ChartView = (data, selector, theme='forestTheme')=>{
    
    if(!(typeof selector === 'string'))throw "'selector' should be a string";
    if(!(typeof theme === 'string'))throw "'theme' should be a string";

    const state ={
        data : data,
        selector: selector,
        theme: theme
    }

    const themes ={
        'forestTheme':['#3B661D','#91CC59'],
        'waterTheme':['#2B4C5E','#65C1DE'],
        'sunTheme':['#B34C20','#F1BA29']
    }

    const buildD3Chart = (data, selector, theme)=>{
        const randomId = Math.floor((Math.random() * 1000) + 1);
        const chartId = 'chart-'+randomId;
        const node = document.createElement("div");
        node.setAttribute('id',chartId);
        const container = document.getElementById(selector);

        if(container){
            container.appendChild(node);
            let chartContainer = document.getElementById(chartId);
            if(container){
                let chart = html(data, chartId, theme);
                chartContainer.innerHTML = chart;
                builD3Arcs(data.dataset, 'circle-'+chartId, theme);
                buildLineChart(data.linearData,'line-'+chartId)
            }else{
                throw `Selector '${chartId}' not found in DOM`;    
            }
        }else{
            throw `Selector '${selector}' not found in DOM`;
        }
    } 

    const builD3Arcs = (dataset, selector, theme)=>{
        const w = 158;
        const h = 158;

        const outerRadius = 79;
        const innerRadius = 72;
        let arc = d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);

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

    let buildLineChart =(dataset, selector)=>{
        dataset.sort((a,b)=> new Date(b.date) - new Date(a.date));

        let height  = 50;
        let width   = 100;

        var margin = {top: 0, right: 0, bottom: 0, left: 0};

        width =     width - margin.left - margin.right;
        height =    height - margin.top - margin.bottom;

        let svg = d3.select('#'+selector).append("svg")
        .attr("width",  width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        let x = d3.scaleTime().range([0, width]);
        x.domain(d3.extent(dataset, (d)=> d.date ));
        let y = d3.scaleLinear().range([height, 0]);
        y.domain([d3.min(dataset, (d)=>d.value) - 5, 100]);

        let valueline = d3.line()
                .x((d)=>x(d.date))
                .y((d)=>y(d.value))
                .curve(d3.curveMonotoneX);
        
        let area = d3.area()
            .x((d)=>x(d.date))
            .y0(height)
            .y1((d)=>y(d.nps));
        
        svg.append("path")
            .data([dataset])
            .attr("class", "area "+state.theme)
            .attr("d", area);

        svg.append("path")
            .data([dataset]) 
            .attr("class", "line "+state.theme)
            .attr("d", valueline); 
        var xAxis_woy = d3.axisBottom(x).tickFormat(d3.timeFormat("Week %V")).tickValues(dataset.map(d=>d.date));
        svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis_woy);
    }


    let html = (data, selector, theme)=>{

        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }

        let sections = data.dataset.reduce((prev, item, index)=>{
            let labelClass = 'left';
            if(index > 0){
                labelClass = 'right';
            }
            return prev += `<div class="label ${labelClass} ${theme}">
                            <div class="label-title">${item.label}</div>
                            <div class="label-data">
                                <span>${item.percent}%</span>
                                <span>${numberWithCommas(item.value)} ${data.units}</span>
                            </div>
                        </div>`    
        },'');

        return `<div class="chart">
                    <div class="chart-container">
                        <div class="title">${data.title}</div>
                        <div class="subtitle">${numberWithCommas(data.total)} ${data.units}</div>
                        <div class="donut" id="circle-${selector}"></div>
                        <div class="line-chart ${theme}" id="line-${selector}"></div>
                    </div>
                    <div class="labels-container clearfix">
                        ${sections}
                    </div>
                    </div>
                </div>`;
    }

    return Object.assign({buildD3Chart: buildD3Chart(state.data, state.selector, state.theme)});

}

export default ChartView;