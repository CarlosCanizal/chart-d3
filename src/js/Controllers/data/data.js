const data =[
    {
        title: 'REVENUE',
        total: 200000,
        data :[
            {
                label:'Smartphone',
                percent:40
            },
            {   label: 'Tablet',
                percent:60
            }],
        units: '€',
        linearData:[
            {date:new Date('2019', '01', '04'), value:10},
            {date:new Date('2019', '01', '11'), value:15},
            {date:new Date('2019', '01', '18'), value:18},
            {date:new Date('2019', '01', '25'), value:15},
            {date:new Date('2019', '02', '04'), value:25},
            {date:new Date('2019', '02', '11'), value:30},
            {date:new Date('2019', '02', '18'), value:40},
            {date:new Date('2019', '02', '25'), value:50},
            {date:new Date('2019', '03', '4'), value:45},
            {date:new Date('2019', '03', '11'), value:50},
            {date:new Date('2019', '03', '18'), value:60}
            ]
    },
    {
        title: 'IMPRESIONS',
        total: 50000000,
        data :[
            {
                label:'Smartphone',
                percent:60
            },
            {   label: 'Tablet',
                percent:40
            }],
        units: '',
        linearData:[
            {date:new Date('2019', '01', '04'), value:60},
            {date:new Date('2019', '01', '11'), value:55},
            {date:new Date('2019', '01', '18'), value:50},
            {date:new Date('2019', '01', '25'), value:45},
            {date:new Date('2019', '02', '04'), value:40},
            {date:new Date('2019', '02', '11'), value:30},
            {date:new Date('2019', '02', '18'), value:25},
            {date:new Date('2019', '02', '25'), value:15},
            {date:new Date('2019', '03', '4'), value:18},
            {date:new Date('2019', '03', '11'), value:15},
            {date:new Date('2019', '03', '18'), value:10}
            ]
    },
    {
        title: 'VISITS',
        total: 600000000,
        data :[
            {   label: 'Tablet',
                percent:20
            },
            {
                label:'Smartphone',
                percent:80
            }],
        units: '',
        linearData:[
            {date:new Date('2019', '01', '04'), value:10},
            {date:new Date('2019', '01', '11'), value:15},
            {date:new Date('2019', '01', '18'), value:18},
            {date:new Date('2019', '01', '25'), value:15},
            {date:new Date('2019', '02', '04'), value:25},
            {date:new Date('2019', '02', '11'), value:30},
            {date:new Date('2019', '02', '18'), value:40},
            {date:new Date('2019', '02', '25'), value:50},
            {date:new Date('2019', '03', '4'), value:45},
            {date:new Date('2019', '03', '11'), value:50},
            {date:new Date('2019', '03', '18'), value:60}
            ]
    }
]

export { data };